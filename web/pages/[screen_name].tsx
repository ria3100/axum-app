import {NextPage, GetServerSidePropsResult} from 'next';
import {useRouter} from 'next/router';
import {handle, RuntimeContext} from 'next-runtime';
import {User} from '../api/@types';
import {useGetUser} from '../hooks/user';
import ErrorPage from './_error';
import {client} from '../lib/aspida';
import {UserBio} from '../components/pages/UserBio';

type Props = {screenName: string; initialUserData: User};
const UserPage: NextPage<Props> = ({screenName, initialUserData}) => {
  const router = useRouter();

  useGetUser(screenName, initialUserData);

  if (router.isFallback) return <ErrorPage statusCode={404} />;

  return <UserBio screenName={screenName} />;
};

export default UserPage;

type ServerContext = RuntimeContext<{screen_name: string}>;
export const getServerSideProps = handle({
  async get({params}: ServerContext): Promise<GetServerSidePropsResult<Props>> {
    const screenName = params?.screen_name as string;
    const user = await client.user._screen_name(screenName).$get();

    return {props: {screenName, initialUserData: user}};
  },
});

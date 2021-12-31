import {NextPage} from 'next';
import {useRouter} from 'next/router';
import {User} from '../apis/@types';
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

type StaticProps = {params: {screen_name: string}};
export const getStaticProps = async ({params}: StaticProps) => {
  const screenName = params.screen_name;

  const user = await client.user._screen_name(screenName).$get();

  return {props: {screenName, initialUserData: user}};
};

export const getStaticPaths = async () => ({
  paths: [],
  fallback: true,
});

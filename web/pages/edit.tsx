import {NextPage} from 'next';
import {UserBioEdit} from '../components/pages/UserBioEdit';

type Props = {};
const UserEditPage: NextPage<Props> = () => {
  return <UserBioEdit />;
};

export default UserEditPage;

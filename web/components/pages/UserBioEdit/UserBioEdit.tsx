import {Header} from '../../commons/Header';
import {Footer} from '../../commons/Footer';
import {ProfileEdit} from './internal/ProfileEdit';
import {useRecoilState} from 'recoil';
import {currentUserState} from '../../../recoil/atoms';
import {Loading} from '../Loading';

import styles from './UserBioEdit.module.css';

type Props = {};
export const UserBioEdit: React.VFC<Props> = () => {
  const [currentUser] = useRecoilState(currentUserState);

  if (currentUser.isLoading) return <Loading />;
  if (!currentUser.userData) return <div>nologin</div>;

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <ProfileEdit userData={currentUser.userData} />
      </div>
      <Footer />
    </div>
  );
};

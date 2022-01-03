import {Footer} from '../../commons/Footer';
import {Header} from './internal/Header';
import {Loading} from '../Loading';
import {useCurrentUserState} from '../../../recoil/currentUserState';
import {useRouter} from 'next/router';
import {SignUpForm} from './internal/SignUpForm';

import styles from './SignUp.module.css';

type Props = {};

export const SignUp: React.VFC<Props> = () => {
  const currentUser = useCurrentUserState();
  const router = useRouter();

  if (currentUser.isLoading) return <Loading />;
  if (currentUser.uid && currentUser.userData) router.push('/');

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <SignUpForm userData={currentUser.userData} />
      </div>
      <Footer />
    </div>
  );
};

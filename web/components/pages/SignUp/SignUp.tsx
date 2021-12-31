import {Footer} from '../../commons/Footer';
import {Header} from './internal/Header';
import {Loading} from '../Loading';
import {useRecoilState} from 'recoil';
import {currentUserState} from '../../../recoil/atoms';
import {useRouter} from 'next/router';
import {SignUpForm} from './internal/SignUpForm';

import styles from './SignUp.module.css';

type Props = {};

export const SignUp: React.VFC<Props> = () => {
  const [currentUser] = useRecoilState(currentUserState);
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

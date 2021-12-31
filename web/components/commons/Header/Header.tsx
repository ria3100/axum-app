import {LoginModal} from '../LoginModal';
import {useState} from 'react';
import {CurrentUser} from './internal/CurrentUser';
import {useRecoilState} from 'recoil';
import {currentUserState} from '../../../recoil/atoms';

import styles from './Header.module.css';

type Props = {};

export const Header: React.VFC<Props> = () => {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  const [currentUser] = useRecoilState(currentUserState);

  const modal = {
    open: () => setShowLoginModal(true),
    close: () => setShowLoginModal(false),
  };

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div>Header</div>
        <CurrentUser
          user={currentUser.userData}
          signOut={() => {}}
          signIn={modal.open}
          isLoading={currentUser.isLoading}
        />
      </div>
      {showLoginModal && <LoginModal close={modal.close} />}
    </header>
  );
};

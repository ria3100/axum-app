import {LoginModal} from '../LoginModal';
import {useState} from 'react';
import {CurrentUser} from './internal/CurrentUser';
import {useGetCurrentUser} from '../../../hooks/currentUser';

import styles from './Header.module.css';

type Props = {};

export const Header: React.VFC<Props> = () => {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  const currentUser = useGetCurrentUser();

  const modal = {
    open: (): void => setShowLoginModal(true),
    close: (): void => setShowLoginModal(false),
  };

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div>Header</div>
        <CurrentUser
          user={currentUser.user}
          signOut={(): void => {
            // eslint-disable-next-line no-console
            console.log('signout');
          }}
          signIn={modal.open}
          isLoading={currentUser.isLoading}
        />
      </div>
      {showLoginModal && <LoginModal close={modal.close} />}
    </header>
  );
};

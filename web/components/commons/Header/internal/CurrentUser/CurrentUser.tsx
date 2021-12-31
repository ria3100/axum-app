import {useState} from 'react';
import {User} from '../../../../../apis/@types';
import {Button} from '../../../Button';
import Link from 'next/link';
import {RingsLoadingIcon} from '../../../../icons/RingsLoadingIcon';

import styles from './CurrentUser.module.css';

type Props = {
  user: User;
  signOut: () => void;
  signIn: () => void;
  isLoading: boolean;
};

export const CurrentUser: React.VFC<Props> = ({
  user,
  signOut,
  signIn,
  isLoading,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const menu = {
    open: () => setShowMenu(true),
    close: () => setShowMenu(false),
  };

  const handleSignOut = () => {
    menu.close();
    signOut();
  };

  if (isLoading)
    return (
      <div className={styles.wrapper}>
        <div className={styles.user_icon}>
          <RingsLoadingIcon color="black" />
        </div>
      </div>
    );

  return (
    <div className={styles.wrapper}>
      {user ? (
        <>
          <img
            className={styles.user_icon}
            src={user.icon_image_url}
            onClick={menu.open}
            alt=""
          />
          {showMenu && (
            <>
              <div className={styles.overlay} onClick={menu.close} />
              <div className={styles.container}>
                <Link href={`/${user.screen_name}`}>
                  <a className={styles.menu_item_user}>{user.name}</a>
                </Link>
                <div className={styles.separator} />
                <a className={styles.menu_item} onClick={handleSignOut}>
                  ログアウト
                </a>
              </div>
            </>
          )}
        </>
      ) : (
        <Button className={styles.signin_button} onClick={signIn}>
          Login
        </Button>
      )}
    </div>
  );
};

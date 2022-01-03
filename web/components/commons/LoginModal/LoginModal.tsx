import {GoogleAuthButton} from './internal/GoogleAuthButton';
import styles from './LoginModal.module.css';

type Props = {close: () => void};
export const LoginModal: React.VFC<Props> = ({close}) => {
  return (
    <div className={styles.overlay} onClick={close}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <GoogleAuthButton />
        </div>
      </div>
    </div>
  );
};

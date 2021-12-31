// import {useState, useEffect} from 'react';
import {auth} from '../../../lib/firebase';
import {GoogleAuthProvider} from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import styles from './LoginModal.module.css';

type Props = {close: () => void};
export const LoginModal: React.VFC<Props> = ({close}) => {
  const provider = new GoogleAuthProvider();

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [provider.providerId],
    callbacks: {
      signInSuccessWithAuthResult: (): any => {
        close();
        return true;
      },
    },
  };

  return (
    <div className={styles.overlay} onClick={close}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
      </div>
    </div>
  );
};

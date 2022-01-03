import type {AppProps} from 'next/app';
import {RecoilRoot} from 'recoil';
import {initialize} from '../lib/firebase';
import {useEffect} from 'react';
import {getAuth} from 'firebase/auth';
import {useGetCurrentUser} from '../hooks/currentUser';
import {useCurrentUserMutators} from '../recoil/currentUserState';

import '../styles/globals.css';

const AuthProvider: React.VFC<{children: React.ReactNode}> = ({children}) => {
  initialize();
  const {setCurrentUser, loadingCurrentUser, resetCurrentUser} =
    useCurrentUserMutators();
  const auth = getAuth();

  useEffect(() => {
    loadingCurrentUser();

    auth.onAuthStateChanged(async user => {
      if (user) {
        const token = await user.getIdToken();

        setCurrentUser({uid: user.uid, authToken: token});
      } else {
        resetCurrentUser();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useGetCurrentUser();

  return <>{children}</>;
};

const App = ({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <RecoilRoot>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  );
};

export default App;

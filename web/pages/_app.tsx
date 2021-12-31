import type {AppProps} from 'next/app';
import {RecoilRoot} from 'recoil';
import {auth} from '../lib/firebase';
import {useEffect} from 'react';
import {useCurrentUser} from '../hooks/currentUser';
import {useRecoilState} from 'recoil';
import {currentUserState} from '../recoil/atoms';
import {useRouter} from 'next/router';

import '../styles/globals.css';

const AuthProvider: React.VFC<{children: React.ReactNode}> = ({children}) => {
  const [, setCurrentUser] = useRecoilState(currentUserState);
  const {fetchCurrentUser} = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    setCurrentUser({isLoading: true});
    auth.onAuthStateChanged(async user => {
      if (user) {
        const token = await user.getIdToken();

        await fetchCurrentUser(token).then(userData => {
          setCurrentUser({
            isLoading: false,
            userData: userData || undefined,
            uid: user.uid,
            authToken: token,
          });

          if (!userData) {
            router.push('/signup');
          }
        });
      } else {
        setCurrentUser({isLoading: false});
      }
    });
  }, []);

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

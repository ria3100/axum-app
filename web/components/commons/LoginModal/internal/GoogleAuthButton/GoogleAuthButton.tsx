import {useCallback} from 'react';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

export const GoogleAuthButton: React.VFC = () => {
  const handleClick = useCallback(() => {
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('Googleアカウントでログインしました。');
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Googleアカウントでログイン</button>
    </div>
  );
};

import {authClient} from '../lib/aspida';
import {useRecoilState} from 'recoil';
import {currentUserState} from '../recoil/atoms';
import {auth} from '../lib/firebase';

export const useCurrentUser = () => {
  const [, setCurrentUser] = useRecoilState(currentUserState);

  const fetchCurrentUser = async token => {
    return await authClient(token)
      .current_user.$get()
      .catch(res => {
        if (res?.response?.status === 404) return;
        throw '';
      });
  };

  const signOut = () => {
    setCurrentUser({isLoading: false});
    auth().signOut();
  };

  return {
    fetchCurrentUser,
    signOut,
  };
};

import {useCallback} from 'react';
import {atom, useRecoilValue, useSetRecoilState} from 'recoil';

type CurrentUser = {
  isLoading: boolean;
  uid?: string;
  authToken?: string;
};
const inital = {isLoading: false};

const currentUserState = atom<CurrentUser>({
  key: 'currentUser',
  default: inital,
});

export const useCurrentUserState = (): CurrentUser => {
  return useRecoilValue(currentUserState);
};

interface UseCurrentUserMutators {
  setCurrentUser: (currentUser: Omit<CurrentUser, 'isLoading'>) => void;
  loadingCurrentUser: () => void;
  resetCurrentUser: () => void;
}

export const useCurrentUserMutators = (): UseCurrentUserMutators => {
  const setState = useSetRecoilState(currentUserState);

  const setCurrentUser = useCallback(
    (currentUser: Omit<CurrentUser, 'isLoading'>) =>
      setState({isLoading: false, ...currentUser}),
    [setState]
  );

  const loadingCurrentUser = useCallback(
    () => setState({isLoading: true}),
    [setState]
  );

  const resetCurrentUser = useCallback(
    () => setState({isLoading: false}),
    [setState]
  );

  return {setCurrentUser, loadingCurrentUser, resetCurrentUser};
};

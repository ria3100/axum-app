import useSWR from 'swr';
import {client, authClient} from '../lib/aspida';
import {useCurrentUserState} from '../recoil/currentUserState';
import {User} from './../api/@types';

type UseGetCurrentUser = () => {
  user?: User;
  isLoading: boolean;
  isError: boolean;
};

export const useGetCurrentUser: UseGetCurrentUser = () => {
  const {authToken} = useCurrentUserState();

  const path = authToken != null ? client.current_user.$path() : null;
  const fetcher = authClient(authToken + '').current_user.$get;

  const {data, error} = useSWR(path, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

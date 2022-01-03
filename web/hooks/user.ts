// import useAspidaSWR from '@aspida/swr';
import useSWR from 'swr';
import {User} from '../api/@types';
import {client} from '../lib/aspida';

type UseGetUser = (
  screenName: string,
  initialData?: User
) => {
  user?: User;
  isLoading: boolean;
  isError: boolean;
};

export const useGetUser: UseGetUser = (screenName, initialData) => {
  const path = client.user._screen_name(screenName).$path();
  const fetcher = client.user._screen_name(screenName).$get;

  const {data, error} = useSWR(path, fetcher, {fallbackData: initialData});

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

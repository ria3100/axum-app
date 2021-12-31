import useAspidaSWR from '@aspida/swr';
import useSWR from 'swr';
import {User} from '../api/@types';
import {client} from '../lib/aspida';

export const useGetUser = (screenName: string, initialUserData?: User) => {
  const key = initialUserData ? {initialData: initialUserData} : {};

  const {data, error} = useSWR(client.user._screen_name(screenName), {
    ...key,
    enabled: !!screenName,
  });

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

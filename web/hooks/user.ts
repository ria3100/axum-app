// import useAspidaSWR from '@aspida/swr';
import useSWR from 'swr';
import {User} from '../api/@types';
import {client} from '../lib/aspida';

export const useGetUser = (screenName: string, initialData?: User): any => {
  const {data, error} = useSWR(
    client.user._screen_name(screenName).$path(),
    client.user._screen_name(screenName).$get,
    {fallbackData: initialData}
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

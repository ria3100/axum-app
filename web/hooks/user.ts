// import useAspidaSWR from '@aspida/swr';
// import useSWR from 'swr';
// import {User} from '../api/@types';
// import {client} from '../lib/aspida';

type User = any;

export const useGetUser = (screenName: string, initialUserData?: User): any => {
  // const key = initialUserData ? {initialData: initialUserData} : {};

  // const {data, error} = useSWR(client.user._screen_name(screenName), {
  //   ...key,
  //   enabled: !!screenName,
  // });

  // eslint-disable-next-line no-console
  console.log({screenName, initialUserData});
  const data = null;
  const error = null;

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

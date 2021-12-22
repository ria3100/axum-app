import useSWR from 'swr';
import {client} from '../utils/APIClientUtils';

export const useHealth = (): any => {
  const {data, error} = useSWR('/health', client.health.get);

  return {data, error};
};

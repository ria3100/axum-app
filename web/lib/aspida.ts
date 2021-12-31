import aspida from '@aspida/fetch';
import api from '../api/$api';

const baseConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE,
  throwHttpErrors: true,
};

export const client = api(aspida(fetch, baseConfig));

export const authClient = (token: string): any =>
  api(
    aspida(fetch, {
      ...baseConfig,
      headers: {Authorization: `Bearer ${token}`},
    })
  );

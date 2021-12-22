import api from '../api/$api';
import aspida from '@aspida/fetch';

export const client = api(aspida(fetch));

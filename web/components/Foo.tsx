import {useEffect} from 'react';
import api from '../api/$api';
import aspida from '@aspida/fetch';
const client = api(aspida(fetch));

export const Foo: React.VFC = () => {
  useEffect(() => {
    (async (): Promise<void> => {
      const foo = await client.health.get();
      // eslint-disable-next-line no-console
      console.log(foo);
    })();
  }, []);

  return <div>hello</div>;
};

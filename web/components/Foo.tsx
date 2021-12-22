import {useEffect} from 'react';
import {useHealth} from '../hooks/health';

export const Foo: React.VFC = () => {
  const {data} = useHealth();

  // eslint-disable-next-line no-console
  useEffect(() => console.log(data), [data]);

  return <div>hello</div>;
};

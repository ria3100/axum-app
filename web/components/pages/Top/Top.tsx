import {Header} from '../../commons/Header';
import {Footer} from '../../commons/Footer';
import {MainVisual} from './internal/MainVisual';

import styles from './Top.module.css';

type Props = {};
export const Top: React.VFC<Props> = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <MainVisual />
      </div>
      <Footer />
    </div>
  );
};

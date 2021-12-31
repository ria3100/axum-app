import {Header} from '../../commons/Header';
import {Footer} from '../../commons/Footer';
import {HeartsLoadingIcon} from '../../icons/HeartsLoadingIcon';
import {RingsLoadingIcon} from '../../icons/RingsLoadingIcon';
import {PuffLoadingIcon} from '../../icons/PuffLoadingIcon';
import {AudioLoadingIcon} from '../../icons/AudioLoadingIcon';
import {BarsLoadingIcon} from '../../icons/BarsLoadingIcon';
import {GridLoadingIcon} from '../../icons/GridLoadingIcon';
import {TailSpinLoadingIcon} from '../../icons/TailSpinLoadingIcon';
import {ThreeDotsLoadingIcon} from '../../icons/ThreeDotsLoadingIcon';

import styles from './Loading.module.css';

type Props = {};

export const Loading: React.VFC<Props> = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <div className={styles.loading_icon}>
          <ThreeDotsLoadingIcon color="black" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

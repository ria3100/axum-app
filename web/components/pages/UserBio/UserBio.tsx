import {Header} from '../../commons/Header';
import {Footer} from '../../commons/Footer';
import {BucketList} from './internal/BucketList';
import {Profile} from './internal/Profile';

import styles from './UserBio.module.css';

type Props = {screenName: string};

export const UserBio: React.VFC<Props> = ({screenName}) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Profile screenName={screenName} />
        <BucketList />
      </div>
      <Footer />
    </div>
  );
};

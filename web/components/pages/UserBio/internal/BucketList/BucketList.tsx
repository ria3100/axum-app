import styles from './BucketList.module.css';
import {ImageUpload} from '../../../../commons/ImageUpload';

type Props = {};

export const BucketList: React.VFC<Props> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>今やりたいこと</div>
      <ImageUpload />
    </div>
  );
};

import styles from './MainVisual.module.css';

type Props = {};

export const MainVisual: React.VFC<Props> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.site_title}>Biost</h1>
        <h2 className={styles.sub_title}>好きで繋がる bio</h2>
      </div>
    </div>
  );
};

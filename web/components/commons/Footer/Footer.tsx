import styles from './Footer.module.css';

type Props = {};

export const Footer: React.VFC<Props> = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>Footer</div>
    </footer>
  );
};

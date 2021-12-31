import styles from './Header.module.css';

type Props = {};

export const Header: React.VFC<Props> = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div>Header</div>
      </div>
    </header>
  );
};

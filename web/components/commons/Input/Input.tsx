import styles from './Input.module.css';

interface Props extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
  errorMessage?: string;
}
export const Input: React.VFC<Props> = ({
  label,
  errorMessage,
  className,
  children,
  ...rest
}) => {
  return (
    <div className={styles.wrapper}>
      <label>
        <span className={styles.label}>{label}</span>
        <input className={`${styles.input}  ${className}`} {...rest} />
        <p className={styles.error_message}>{errorMessage}</p>
      </label>
    </div>
  );
};

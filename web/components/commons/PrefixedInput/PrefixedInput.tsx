import styles from './PrefixedInput.module.css';

interface Props extends React.ComponentPropsWithoutRef<'input'> {
  prefix: string;
  label?: string;
  errorMessage?: string;
}
export const PrefixedInput: React.VFC<Props> = ({
  prefix,
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
        <div className={`${styles.field}  ${className}`}>
          <span className={styles.prefix}>{prefix}</span>
          <input className={styles.input} {...rest} />
        </div>
        <p className={styles.error_message}>{errorMessage}</p>
      </label>
    </div>
  );
};

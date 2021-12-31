import styles from './Textarea.module.css';

interface Props extends React.ComponentPropsWithoutRef<'textarea'> {}
export const Textarea: React.VFC<Props> = ({className, children, ...rest}) => {
  return <textarea className={`${styles.wrapper}  ${className}`} {...rest} />;
};

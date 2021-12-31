import {forwardRef} from 'react';
import styles from './Button.module.css';

interface Props extends React.ComponentPropsWithoutRef<'a'> {
  color?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  // children: React.ReactNode;
}

export const Button = forwardRef<HTMLAnchorElement, Props>(
  ({className, color = 'primary', size = 'md', children, ...rest}, ref) => {
    const styleColor =
      color === 'primary' ? styles.color_primary : styles.color_secondary;
    const styleSize = size === 'md' ? styles.size_m : styles.size_l;

    return (
      <a
        ref={ref}
        className={`${styles.wrapper} ${styleColor} ${styleSize} ${className}`}
        {...rest}
      >
        {children}
      </a>
    );
  }
);

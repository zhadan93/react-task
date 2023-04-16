import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

const { btn } = styles;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: 'icon' | 'primary' | 'secondary' | 'ghost';
}

const Button: React.FC<ButtonProps> = ({ children, className, kind, ...rest }) => {
  return (
    <button className={classNames(btn, { [`${styles[kind || '']}`]: kind }, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;

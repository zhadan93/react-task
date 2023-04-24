import { InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Input.module.scss';

const { inputLabel, input } = styles;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | null;
  className?: string;
  inputClassName?: string;
}

const Input: React.FC<InputProps> = ({ label, className, inputClassName, ...rest }) => {
  return (
    <label className={classNames(inputLabel, className)}>
      {label}
      <input className={classNames(input, inputClassName)} {...rest} autoComplete="off" />
    </label>
  );
};

export default Input;

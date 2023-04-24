import classNames from 'classnames';

import styles from './Error.module.scss';

const { error } = styles;

type ErrorProps = {
  className?: string;
  message: string;
};

const Error: React.FC<ErrorProps> = ({ className, message }) => {
  return <div className={classNames(error, className)}>{message}</div>;
};

export default Error;

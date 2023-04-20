import classNames from 'classnames';

import styles from './Loader.module.scss';

const { loader } = styles;

type LoaderProps = {
  className?: string;
};

const Loader: React.FC<LoaderProps> = ({ className }) => {
  return <div className={classNames(loader, className)} />;
};

export default Loader;

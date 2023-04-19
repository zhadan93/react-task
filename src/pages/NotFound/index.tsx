import { Link } from 'react-router-dom';
import classNames from 'classnames';

import ROUTES from '@/constants/routes';

import styles from './NotFound.module.scss';

const { notFound, errorCode, title, description } = styles;

const NotFound = () => {
  return (
    <div className={classNames(notFound)}>
      <h2 className={classNames(errorCode)}>404</h2>
      <h3 className={classNames(title)}>Oops!</h3>
      <p className={classNames(description)}>Sorry, this page was not found</p>
      <Link to={ROUTES.LEARNING}>Home Page</Link>
    </div>
  );
};

export default NotFound;

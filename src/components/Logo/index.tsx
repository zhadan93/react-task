import { Link } from 'react-router-dom';
import classNames from 'classnames';

import ROUTES from '@/constants/routes';

import style from './Logo.module.scss';

const { logo, link } = style;

const Logo = () => {
  return (
    <h1 className={classNames(logo)}>
      <Link className={classNames(link)} to={ROUTES.LEARNING}>
        Портал разработчика
      </Link>
    </h1>
  );
};

export default Logo;

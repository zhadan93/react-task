import { Link } from 'react-router-dom';
import classNames from 'classnames';

import ROUTES from '@/constants/routes';

import style from './Logo.module.scss';

const { logo, link } = style;

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <h1 className={classNames(logo, className)}>
      <Link className={classNames(link)} to={ROUTES.LEARNING}>
        Портал разработчика
      </Link>
    </h1>
  );
};

export default Logo;

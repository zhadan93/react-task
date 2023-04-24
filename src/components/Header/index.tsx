import classNames from 'classnames';

import AppNav from '../AppNav';
import Logo from '../Logo';
import Tools from './Tools';
import User from '../User';

import styles from './Header.module.scss';

const { header, container, nav, headerLogo, headerTools } = styles;

const Header = () => {
  return (
    <header className={classNames(header)}>
      <div className={classNames(container)}>
        <Logo className={headerLogo} />
        <AppNav className={classNames(nav)} />
        <Tools className={headerTools} />
        <User />
      </div>
    </header>
  );
};

export default Header;

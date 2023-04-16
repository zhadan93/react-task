import classNames from 'classnames';

import AppNav from '../AppNav';
import Logo from '../Logo';
import Tools from './Tools';
import User from '../User';

import style from './Header.module.scss';

const { header, container, headerLogo, headerTools } = style;

const Header = () => {
  return (
    <header className={classNames(header)}>
      <div className={classNames(container)}>
        <Logo className={headerLogo} />
        <AppNav />
        <Tools className={headerTools} />
        <User />
      </div>
    </header>
  );
};

export default Header;

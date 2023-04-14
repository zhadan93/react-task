import { Outlet } from 'react-router-dom';
import classNames from 'classnames';

import Logo from '../Logo';
import AppNav from '../AppNav';

import style from './Layout.module.scss';

const { main } = style;

const Layout = () => {
  return (
    <>
      <main className={classNames(main)}>
        <Logo />
        <AppNav />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

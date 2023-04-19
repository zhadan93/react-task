import { Outlet } from 'react-router-dom';
import classNames from 'classnames';

import Header from '../Header';

import style from './Layout.module.scss';

const { main } = style;

const Layout = () => {
  return (
    <>
      <Header />
      <main className={classNames(main)}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

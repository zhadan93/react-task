import ROUTES from '@/constants/routes';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './AppNav.module.scss';

const { LEARNING, TASKS } = ROUTES;
const { nav, list, link, active } = styles;

const NAV = {
  learning: {
    name: 'Моё обучение',
    path: LEARNING,
  },
  tasks: {
    name: 'Задачи',
    path: TASKS,
  },
};

const setLinkClassName = ({ isActive }: { isActive: boolean }) =>
  classNames(link, { [active]: isActive });

type AppNavProps = {
  className?: string;
};

const AppNav: React.FC<AppNavProps> = ({ className }) => {
  return (
    <nav className={classNames(nav, className)}>
      <ul className={classNames(list)}>
        {Object.entries(NAV).map(([key, { name, path }]) => (
          <li key={key}>
            <NavLink to={path} className={setLinkClassName} end>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AppNav;

import classNames from 'classnames';

import Geolocation from '@components/Geolocation';
import OrganizationsSearch from '@/components/OrganizationsSearch';

import styles from './Tasks.module.scss';

const { container, geolocation } = styles;

const Tasks = () => {
  return (
    <div className={classNames(container)}>
      <Geolocation className={classNames(geolocation)} />
      <OrganizationsSearch />
    </div>
  );
};

export default Tasks;

import classNames from 'classnames';

import Geolocation from '@components/Geolocation';

import styles from './Tasks.module.scss';

const { container } = styles;

const Tasks = () => {
  return (
    <div className={classNames(container)}>
      <Geolocation />
    </div>
  );
};

export default Tasks;

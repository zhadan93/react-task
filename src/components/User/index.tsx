import classNames from 'classnames';

import Avatar from './Avatar';

import styles from './User.module.scss';

const { user, name } = styles;

const User = () => {
  return (
    <div className={classNames(user)}>
      <div className={classNames()}>
        <Avatar />
      </div>
      <span className={classNames(name)}>Жадан Евгения</span>
    </div>
  );
};

export default User;

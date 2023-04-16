import classNames from 'classnames';

import Avatar from './Avatar';

import style from './User.module.scss';

const { user, name } = style;

const User = () => {
  return (
    <div className={classNames(user)}>
      <div className={classNames()}>
        <Avatar />
      </div>
      <span className={classNames(name)}>Михаил Романов</span>
    </div>
  );
};

export default User;

import classNames from 'classnames';

import style from './Avatar.module.scss';

const { avatar } = style;

const Avatar = () => {
  return <div className={classNames(avatar)} />;
};

export default Avatar;

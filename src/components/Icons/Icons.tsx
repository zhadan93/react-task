import classNames from 'classnames';

import { IconProps } from '@/types/types';

import defaultStyles from './Icons.module.scss';

const { icon, checkIcon } = defaultStyles;

export const CheckIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={classNames(icon, checkIcon, className)}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.79876 10.4172L3.12386 7.07923L1.77914 8.55968L6.99379 13.2962L14.733 4.07302L13.2009 2.78745L6.79876 10.4172Z"
        fill="white"
      />
    </svg>
  );
};

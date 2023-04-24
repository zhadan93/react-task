import classNames from 'classnames';

import { IconProps } from '@/types/types';

import defaultStyles from '../Icons.module.scss';
import styles from './ButtonIcons.module.scss';

const { icon } = defaultStyles;
const { restartIcon, controlGhost } = styles;

export const RestartIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={classNames(icon, restartIcon, className)}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.85314 2.36057L2.5 0.5L1 6H6.5L5.02931 3.97781C5.8599 3.36333 6.88754 2.99999 8.00004 2.99999C10.419 2.99999 12.4368 4.71776 12.9 7H14.9283C14.7711 5.91148 14.3587 4.8686 13.7165 3.95999C12.8091 2.67595 11.4957 1.73483 9.98815 1.28826C8.48057 0.841697 6.86654 0.915695 5.40614 1.49833C4.85028 1.7201 4.32899 2.01064 3.85314 2.36057Z" />
      <path d="M2.2835 12.04C1.64135 11.1314 1.2289 10.0885 1.07178 9H3.10001C3.56327 11.2822 5.58103 13 7.99999 13C9.11249 13 10.1401 12.6367 10.9707 12.0222L9.50004 10H15L13.5 15.5L12.1469 13.6394C11.671 13.9894 11.1498 14.2799 10.5939 14.5017C9.13349 15.0843 7.51946 15.1583 6.01188 14.7117C4.5043 14.2652 3.19096 13.3241 2.2835 12.04Z" />
    </svg>
  );
};

export const DownIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={classNames(icon, controlGhost, className)}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.89818 9.18756L2.25177 6.54115L1.54467 7.24826L5.39822 11.1018L9.25177 7.24826L8.54467 6.54115L5.89818 9.18764V1.89825H4.89818V9.18756Z" />
    </svg>
  );
};

export const ForwardIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={classNames(icon, controlGhost, className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.5942 11L11.2971 7.70291L12.7113 6.2887L18.4226 12L12.7113 17.7113L11.2971 16.2971L14.5942 13H6V11H14.5942Z" />
    </svg>
  );
};

export const BackwardIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={classNames(icon, controlGhost, className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.40717 11L12.7043 7.70291L11.2901 6.2887L5.57874 12L11.2901 17.7113L12.7043 16.2971L9.40716 13H18V11H9.40717Z" />
    </svg>
  );
};

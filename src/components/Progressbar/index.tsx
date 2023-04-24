import { ReactNode } from 'react';
import classNames from 'classnames';
import { CircularProgressbar } from 'react-circular-progressbar';

import styles from './Progressbar.module.scss';

const { progress, progressLabel } = styles;

type ProgressbarProps = {
  className?: string;
  progressbarClassName?: string;
  labelClassName?: string;
  isVisibleProgressbar: boolean;
  label?: ReactNode;
  value: number;
  strokeWidth?: number;
  background?: boolean;
};

const Progressbar: React.FC<ProgressbarProps> = ({
  className,
  progressbarClassName,
  labelClassName,
  isVisibleProgressbar,
  label,
  value,
  strokeWidth = 10,
  background,
}) => {
  return (
    <div className={classNames(progress, className)}>
      {label && <span className={classNames(progressLabel, labelClassName)}>{label}</span>}
      {isVisibleProgressbar && (
        <CircularProgressbar
          className={classNames('success-circular-progressbar', progressbarClassName)}
          value={value}
          strokeWidth={strokeWidth}
          background={background}
        />
      )}
    </div>
  );
};

export default Progressbar;

import classNames from 'classnames';

import { ProgressStatus } from '@/types/enums';

import Button from '@components/Button';
import { BackwardIcon } from '@components/Icons/ButtonIcons';

import styles from './ProgressButton.module.scss';

const { button, icon } = styles;
const { START, PROGRESS, COMPLETE } = ProgressStatus;

const buttons = {
  [START]: {
    name: 'Начать',
    Icon: null,
    kind: 'primary',
  },
  [PROGRESS]: {
    name: 'Продолжить тему',
    Icon: null,
    kind: 'primary',
  },
  [COMPLETE]: {
    name: 'Пройти заново',
    Icon: BackwardIcon,
    kind: 'secondary',
  },
} as const;

type ProgressButtonProps = {
  className?: string;
  status: ProgressStatus;
};

const ProgressButton: React.FC<ProgressButtonProps> = ({ className, status }) => {
  const { name, Icon, kind } = buttons[status];

  return (
    <Button className={classNames(button, className)} kind={kind}>
      {Icon && <Icon className={classNames(icon)} />}
      {name}
    </Button>
  );
};

export default ProgressButton;

import classNames from 'classnames';

import Button from '@/components/Button';
import { QuestionIcon, RingIcon, SunIcon } from '@/components/Icons/ToolsIcons';

import styles from './Tools.module.scss';

const { tools, btn } = styles;

type ToolsProps = {
  className?: string;
};

const Tools: React.FC<ToolsProps> = ({ className }) => {
  return (
    <div className={classNames(tools, className)}>
      <Button className={classNames(btn)} kind="icon">
        <RingIcon />
      </Button>
      <Button className={classNames(btn)} kind="icon">
        <QuestionIcon />
      </Button>
      <Button className={classNames(btn)} kind="icon">
        <SunIcon />
      </Button>
    </div>
  );
};

export default Tools;

import classNames from 'classnames';

import { TopicData } from '@/types/types';
import { ProgressStatus } from '@/types/enums';

import getCorrectTopicCardProgressLabelWord from '@utils/getCorrectProgressLabelWord';

import Tags from './Tags';
import ProgressButton from './ProgressButton';
import Progressbar from '../Progressbar';
import { CheckIcon } from '../Icons/Icons';

import styles from './TopicCard.module.scss';

const {
  card,
  mainContent,
  cardTitle,
  cardTags,
  cardDescription,
  cardProgress,
  cardBtn,
  cardProgressLabel,
  labelNumber,
  completeProgressLabel,
  progressbarIcon,
  completeCardProgress,
  cardProgressbar,
} = styles;
const { START, PROGRESS, COMPLETE } = ProgressStatus;

type TopicCardProps = {
  className?: string;
  kind?: 'large';
  topic: TopicData;
};

const TopicCard: React.FC<TopicCardProps> = ({ className, topic, kind }) => {
  const {
    title,
    description,
    tags,
    tasks: { total, complete },
  } = topic;

  let progress: ProgressStatus = START;
  let label = (
    <>
      <span className={classNames(labelNumber, { [`${styles[kind || '']}`]: kind })}>
        {complete > 0 && `${complete}/`}
        {`${total}`}
      </span>
      {` ${getCorrectTopicCardProgressLabelWord(total, complete)}`}
    </>
  );

  if (complete === total) {
    progress = COMPLETE;
    label = <CheckIcon className={classNames(progressbarIcon)} />;
  } else if (complete > 0) {
    progress = PROGRESS;
  }

  return (
    <article className={classNames(card, { [`${styles[kind || '']}`]: kind }, className)}>
      <div className={classNames(mainContent, { [`${styles[kind || '']}`]: kind })}>
        <h3 className={classNames(cardTitle, { [`${styles[kind || '']}`]: kind })}>{title}</h3>
        <Tags tags={tags} className={classNames(cardTags)} />
        <p className={classNames(cardDescription, { [`${styles[kind || '']}`]: kind })}>
          {description}
        </p>
      </div>
      <ProgressButton className={classNames(cardBtn)} status={progress} />
      <Progressbar
        isVisibleProgressbar={progress === PROGRESS || progress === COMPLETE}
        className={classNames(cardProgress, {
          [completeCardProgress]: progress === COMPLETE,
          [`${styles[kind || '']}`]: kind,
        })}
        progressbarClassName={classNames(cardProgressbar, { [`${styles[kind || '']}`]: kind })}
        labelClassName={classNames(cardProgressLabel, {
          [`${styles[kind || '']}`]: kind,
          [completeProgressLabel]: progress === COMPLETE,
        })}
        value={(complete / total) * 100}
        background={progress === COMPLETE}
        label={label}
      />
    </article>
  );
};

export default TopicCard;

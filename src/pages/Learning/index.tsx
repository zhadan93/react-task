import classNames from 'classnames';

import { recommendedTopics } from '@/data/topics';

import Button from '@/components/Button';
import TopicCard from '@/components/TopicCard';
import { DownIcon } from '@/components/Icons/ButtonIcons';

import styles from './Learning.module.scss';

const {
  container,
  recommendation,
  title,
  recommendationBtnContainer,
  recommendationBtn,
  recommendationList,
} = styles;

const Learning = () => {
  return (
    <>
      <section className={classNames(recommendation)}>
        <div className={classNames(container)}>
          <h2 className={classNames(title)}>Рекомендуемые темы</h2>
          <ul className={classNames(recommendationList)}>
            {recommendedTopics.map((topic) => (
              <li key={topic.id}>
                <TopicCard topic={topic} kind="large" />
              </li>
            ))}
          </ul>
          <div className={classNames(recommendationBtnContainer)}>
            <Button kind="ghost" className={classNames(recommendationBtn)}>
              Показать ещё <DownIcon />
            </Button>
          </div>
        </div>
      </section>
      <section className={classNames()}>
        <div className={classNames(container)}>
          <h2 className={classNames(title)}>Путь Front End Developer</h2>
        </div>
      </section>
      <section className={classNames()}>
        <div className={classNames(container)}>
          <h2 className={classNames(title)}>Каталог тем</h2>
        </div>
      </section>
    </>
  );
};

export default Learning;

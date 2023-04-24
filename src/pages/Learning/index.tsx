import { MouseEvent, useState } from 'react';
import classNames from 'classnames';

import { allTopics, frontEndTopics, recommendedTopics } from '@/data/topics';

import Button from '@/components/Button';
import TopicCard from '@/components/TopicCard';
import { BackwardIcon, DownIcon, ForwardIcon } from '@/components/Icons/ButtonIcons';

import styles from './Learning.module.scss';

const {
  container,
  stripeContainer,
  recommendation,
  frontEndList,
  title,
  frontEndTitle,
  recommendationBtnContainer,
  recommendationBtn,
  recommendationList,
  listContainer,
  sliderBtnContainer,
  sliderBtn,
  allTopicsList,
  catalogTitle,
  catalogBtnContainer,
  catalogBtn,
  activeCatalogBtn,
} = styles;

const catalogButtons = [
  {
    id: 'all',
    name: 'Все',
  },
  {
    id: 'work',
    name: 'Рабочая среда',
  },
  {
    id: 'libraries',
    name: 'Библиотеки',
  },
  {
    id: 'completed',
    name: 'Пройденые',
  },
  {
    id: 'uncompleted',
    name: 'Не пройденные',
  },
];

const Learning = () => {
  const [activeBtn, setActiveBtn] = useState(catalogButtons[0].id);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setActiveBtn(e.currentTarget.id);
  };

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
        <div className={classNames(container, stripeContainer)}>
          <h2 className={classNames(title, frontEndTitle)}>Путь Front End Developer</h2>
          <Button kind="ghost" className={classNames()}>
            Скрыть пройденные
          </Button>
          <div className={classNames(sliderBtnContainer)}>
            <Button kind="ghost" className={classNames(sliderBtn)}>
              <BackwardIcon />
            </Button>
            <Button kind="ghost" className={classNames(sliderBtn)}>
              <ForwardIcon />
            </Button>
          </div>
          <div className={classNames(listContainer)}>
            <ul className={classNames(frontEndList)}>
              {frontEndTopics.map((topic) => (
                <li key={topic.id}>
                  <TopicCard topic={topic} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className={classNames(container)}>
          <h2 className={classNames(title, catalogTitle)}>Каталог тем</h2>
          <div className={classNames(catalogBtnContainer)}>
            {catalogButtons.map(({ id, name }) => (
              <Button
                key={name}
                id={id}
                className={classNames(catalogBtn, { [activeCatalogBtn]: id === activeBtn })}
                onClick={handleClick}
              >
                {name}
              </Button>
            ))}
          </div>
          <ul className={classNames(allTopicsList)}>
            {allTopics.map((topic) => (
              <li key={topic.id}>
                <TopicCard topic={topic} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Learning;

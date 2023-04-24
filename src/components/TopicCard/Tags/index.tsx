import classNames from 'classnames';

import styles from './Tags.module.scss';

const { cardTags, cardTag } = styles;

type TagsProps = {
  className?: string;
  tagClassName?: string;
  tags: string[];
};

const Tags: React.FC<TagsProps> = ({ className, tagClassName, tags }) => {
  return (
    <span className={classNames(cardTags, className)}>
      {tags.map((tag) => (
        <span key={tag} className={classNames(cardTag, tagClassName)}>
          {tag}
        </span>
      ))}
    </span>
  );
};

export default Tags;

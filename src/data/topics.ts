const greetingTitle = 'Добро пожаловать!';
const startTitle = 'Начало работы';
const introductionTitle = 'Введение в рабочую среду';
const libraryTitle = 'Работа с библиотеками GPN';
const beginnerTags = ['Для новичка', 'Основы работы'];
const professionalTags = ['Профессионалу', 'Библиотеки'];
const description = 'Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете';
const startTotal = 10;
const libraryTotal = 255;

const topics = [
  {
    id: 1,
    title: greetingTitle,
    description,
    tags: beginnerTags,
    tasks: {
      total: startTotal,
      complete: startTotal,
    },
  },
  {
    id: 2,
    title: startTitle,
    description,
    tags: beginnerTags,
    tasks: {
      total: startTotal,
      complete: 8,
    },
  },
  {
    id: 3,
    title: introductionTitle,
    description,
    tags: beginnerTags,
    tasks: {
      total: startTotal,
      complete: 0,
    },
  },
  {
    id: 4,
    title: libraryTitle,
    description,
    tags: professionalTags,
    tasks: {
      total: libraryTotal,
      complete: 0,
    },
  },
  {
    id: 5,
    title: introductionTitle,
    description,
    tags: professionalTags,
    tasks: {
      total: startTotal,
      complete: 0,
    },
  },
  {
    id: 6,
    title: introductionTitle,
    description,
    tags: beginnerTags,
    tasks: {
      total: startTotal,
      complete: 3,
    },
  },
  {
    id: 7,
    title: libraryTitle,
    description,
    tags: professionalTags,
    tasks: {
      total: libraryTotal,
      complete: 0,
    },
  },
  {
    id: 8,
    title: introductionTitle,
    description,
    tags: professionalTags,
    tasks: {
      total: startTotal,
      complete: 0,
    },
  },
];

export const recommendedTopics = topics.slice(1, 2);
export const frontEndTopics = topics.slice(0, 3);
export const allTopics = [...topics.slice(1, 2), ...topics.slice(3)];

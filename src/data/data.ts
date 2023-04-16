const greetingTitle = 'Добро пожаловать!';
const startTitle = 'Начало работы';
const introductionTitle = 'Введение в рабочую среду';
const libraryTitle = 'Работа с библиотеками GPN';
const beginnerTags = ['Для новичка', 'Основы работы'];
const professionalTags = ['Профессионалу', 'Библиотеки'];
const description = 'Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете';
const startTotal = 10;
const libraryTotal = 255;

const data = [
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
    title: introductionTitle,
    description,
    tags: beginnerTags,
    tasks: {
      total: startTotal,
      complete: 0,
    },
  },
  {
    id: 3,
    title: startTitle,
    description,
    tags: beginnerTags,
    tasks: {
      total: startTotal,
      complete: 8,
    },
  },
  {
    id: 4,
    title: introductionTitle,
    description,
    tags: beginnerTags,
    tasks: {
      total: startTotal,
      complete: 3,
    },
  },
  {
    id: 5,
    title: libraryTitle,
    description,
    tags: professionalTags,
    tasks: {
      total: libraryTotal,
      complete: 0,
    },
  },
  {
    id: 6,
    title: libraryTitle,
    description,
    tags: professionalTags,
    tasks: {
      total: libraryTotal,
      complete: 0,
    },
  },
  {
    id: 7,
    title: introductionTitle,
    description,
    tags: professionalTags,
    tasks: {
      total: startTotal,
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

export const recommendedTopics = [data.at(1)];
export const frontEndTopics = [...data.slice(0, 3)];
export const allTopics = [...data.slice(2)];

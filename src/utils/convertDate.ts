const convertDate = (timestamp: number) => {
  const date = new Date(timestamp);

  return `${[date.getDate(), date.getMonth()]
    .map((dateElement) => `0${dateElement}`.slice(-2))
    .join('.')}.${date.getFullYear()}`;
};

export default convertDate;

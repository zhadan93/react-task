const getCorrectProgressLabelWord = (total: number, complete: number) => {
  const remainderOfDivisionBy10 = total % 10;
  const remainderOfDivisionBy100 = total % 100;
  const condition = remainderOfDivisionBy10 === 1 && remainderOfDivisionBy100 % 100 !== 11;

  if (!complete && condition) {
    return 'задание';
  }

  if (
    complete
      ? condition
      : remainderOfDivisionBy10 > 1 &&
        remainderOfDivisionBy10 < 5 &&
        !(remainderOfDivisionBy100 > 10 && remainderOfDivisionBy100 < 15)
  ) {
    return 'задания';
  }

  return 'заданий';
};

export default getCorrectProgressLabelWord;

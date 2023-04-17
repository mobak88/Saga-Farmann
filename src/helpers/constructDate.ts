export const constructDate = (dateA: number, dateB: number) => {
  const [aDay, aMonth, aYear] = dateA.toString().split("/");
  const [bDay, bMonth, bYear] = dateB.toString().split("/");
  const aDateFrom = new Date(
    parseInt(aYear),
    parseInt(aMonth) - 1,
    parseInt(aDay)
  ).valueOf();
  const bDateFrom = new Date(
    parseInt(bYear),
    parseInt(bMonth) - 1,
    parseInt(bDay)
  ).valueOf();
  return [aDateFrom, bDateFrom];
};

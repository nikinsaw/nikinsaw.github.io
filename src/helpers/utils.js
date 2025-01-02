export const getYearsTillNow = () => {
  const now = new Date();
  const startDate = new Date('2019-07-01');
  const years = now.getFullYear() - startDate.getFullYear();

  // Handle the case where the current month is before the start month
  if (now.getMonth() < startDate.getMonth() ||
    (now.getMonth() === startDate.getMonth() && now.getDate() < startDate.getDate())) {
    years--;
  }

  // Determine if the current year is half over
  const halfYear = now.getMonth() - startDate.getMonth() >= 6;

  return years + (halfYear ? '.5' : '');
};

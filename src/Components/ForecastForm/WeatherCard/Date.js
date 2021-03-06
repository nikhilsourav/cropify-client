export const getDateInWords = (date) => {
  const weatherDate = new Date(date);

  const weekdayMap = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
  };

  const monthMap = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
  };

  return {
    date: weatherDate.getDate(),
    weekDay: weekdayMap[weatherDate.getDay()],
    month: monthMap[weatherDate.getMonth()],
    year: weatherDate.getFullYear(),
  };
};

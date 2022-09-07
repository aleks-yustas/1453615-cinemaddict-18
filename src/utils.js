import dayjs from 'dayjs';

const getRandomInt = (min = 0, max = 1) => {
  if (min > max) {
    [min, max] = [max, min];
  }

  if (min < 0 || max < 0) {
    return -1;
  }

  return Math.floor(Math.random() * (1 + max - min) + min);
};

const getRandomSentance = (text) => {
  const sentances = text.split(/(?<=\.)\s/);

  return sentances[getRandomInt(0, sentances.length - 1)];
};

const getRandomText = (text) => {
  const sentances = text.split(/(?<=\.)\s/);

  const sentancesCount = getRandomInt(1, sentances.length - 1);

  const randomSentances = [];

  for (let i = 0; i < sentancesCount; i++) {
    randomSentances.push(sentances[getRandomInt(0, sentances.length - 1)]);
  }

  return randomSentances.join(' ');
};

const getRandomDate = () => {
  const maxDaysGap = 5;
  const maxHoursGap = 24;
  const maxMinutesGap = 60;

  const daysGap = getRandomInt(0, maxDaysGap);
  const hoursGap = getRandomInt(0, maxHoursGap);
  const minutesGap = getRandomInt(0, maxMinutesGap);

  return dayjs().add(-daysGap, 'day').add(-hoursGap, 'hour').add(-minutesGap, 'minute').toISOString();
};

const humanizeRuntime = (runtime) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return `${hours > 0 ? `${hours}h ` : ''}${minutes}m`;
};

const humanizeDateDiff = (date) => {
  const currentDay = dayjs().format('D');
  const commentDay = dayjs(date).format('D');
  const dayDiff = dayjs().diff(dayjs(date), 'day');

  if (dayDiff === 0 && currentDay === commentDay) {
    return 'Today';
  }

  if (dayDiff === 1 || (dayDiff === 0 && currentDay !== commentDay)) {
    return 'Yearsteday';
  }

  if (dayDiff >= 2 && dayDiff <= 7) {
    return `${dayDiff} days ago`;
  }

  return dayjs(date).format('YYYY/MM/DD HH:MM');
};

const getFilmCardConrolActiveClass = (controlState) => controlState ? 'film-card__controls-item--active' : '';

export {getRandomInt, humanizeRuntime, getRandomSentance, getRandomText, getRandomDate, humanizeDateDiff, getFilmCardConrolActiveClass};

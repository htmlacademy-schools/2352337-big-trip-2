import dayjs from 'dayjs';

const DATE_FORMAT = 'DD/MM/YY';
const TIME_FORMAT = 'HH:mm';
// const EVENT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const formatDate = (date) => dayjs(date).format(DATE_FORMAT);

const formatTime = (time) => dayjs(time).format(TIME_FORMAT);

const formatDuration = (start, end) => {
  const duration = dayjs.duration(dayjs(end).diff(dayjs(start)));
  const hours = duration.hours();
  const minutes = duration.minutes();

  return `${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
};

const displayOffers = (offers) => offers.map((offer) => `
  <li class="event__offer">
    <span class="event__offer-title">${offer.title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${offer.price}</span>
  </li>
`).join('');

export { formatDate, formatTime, formatDuration, displayOffers };

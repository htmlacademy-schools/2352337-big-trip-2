import { createElement } from '../render.js';

import { formatDate, formatTime, formatDuration, displayOffers } from '../utils.js';

const waypTemplate = (point, destinations = [], offersByType = []) => {
  let waypoints = '';
  for (let i = 0; i < point.length; i++) {
    const destination = destinations.find((dest) => dest.id === point[i].destination);
    const offersOfType = offersByType.find((offer) => offer.type === point[i].type).offers;
    const selectedOffers = offersOfType.filter((offer) => point[i].offers.includes(offer.id)) || [];

    waypoints += `<li class="trip-events__item">
          <div class="event">
            <time class="event__date" datetime="${formatDate(point[i].dateFrom)}">${formatDate(point[i].dateFrom)}</time>
            <div class="event__type">
              <img class="event__type-icon" width="42" height="42" src="img/icons/${point[i].type}.png" alt="Event type icon">
            </div>
            <h3 class="event__title">${point[i].type} ${destination.name}</h3>
            <div class="event__schedule">
              <div class="event__time">
                <time class="event__start-time" datetime="${point[i].dateFrom}">${formatTime(point[i].dateFrom)}</time>
                <time class="event__end-time" datetime="${point[i].dateTo}">${formatTime(point[i].dateTo)}</time>
              </div>
              <div class="event__duration">${formatDuration(point[i].dateFrom, point[i].dateTo)}</div>
            </div>
            <div class="event__price">
              <span class="event__price-value">${point[i].basePrice}</span>
            </div>
            <h4 class="visually-hidden">Offers:</h4>
            <ul class="event__selected-offers">
              ${displayOffers(selectedOffers)}
            </ul>
            <button class="event__favorite-btn${point[i].isFavorite ? ' event__favorite-btn--active' : ''}" type="button">
              <span class="visually-hidden">Add to favorite</span>
              <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
              </svg>
            </button>
            <button class="event__rollup-btn" type="button">
              <span class="visually-hidden">Open event</span>
              </button>
              </div>
                </li>`;
  }
  return waypoints;
};

export default class WaypListView {
  constructor (points, destinations, offersByType) {
    this.points = points;
    this.destinations = destinations;
    this.offersByType = offersByType;
  }

  getTemplate() {
    return waypTemplate(this.points, this.destinations, this.offersByType);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

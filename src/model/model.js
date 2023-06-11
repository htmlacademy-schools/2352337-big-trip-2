import {Points, Destinations, OffersByType} from '../mock/mock.js';

export default class Model {
  constructor() {
    this._points = Points;
    this._destinations = Destinations;
    this._offersByType = OffersByType;
  }

  GetDestinations() {
    return this._destinations;
  }

  GetOffersByType() {
    return this._offersByType;
  }

  GetPoints() {
    return this._points;
  }
}

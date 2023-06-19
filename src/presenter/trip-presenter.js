import EventsListView from '../view/events-list.js';
import CreationFormView from '../view/creation-form-view';
import EditorFormView from '../view/editor-form-view';
import WaypointListView from '../view/waypoint-list-view';
import { render } from '../render';
import Model from '../model/model.js';

export default class TripPresenter {
  constructor() {
    this.tripEvents = document.querySelector('.trip-events');
    this.eventsList = new EventsListView();
    this.model = new Model();
  }

  init() {
    render(this.eventsList, this.tripEvents);
    render(new EditorFormView(), this.eventsList.getElement());
    render(new CreationFormView(), this.eventsList.getElement());

    const points = this.model.GetPoints();
    const destinations = this.model.GetDestinations();
    const offersByType = this.model.GetOffersByType();

    render(new WaypointListView(points, destinations, offersByType), this.eventsList.getElement());
  }
}

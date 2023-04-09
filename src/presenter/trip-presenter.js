import EventsListView from '../view/events-list.js';
import CreationFormView from '../view/creation-form-view';
import EditorFormView from '../view/editor-form-view';
import WaypointListView from '../view/waypoint-list-view';
import { render } from '../render';

export default class TripPresenter {
  constructor() {
    this.tripEvents = document.querySelector('.trip-events');
    this.eventsList = new EventsListView();
  }

  init() {
    render(this.eventsList, this.tripEvents);
    render(new EditorFormView(), this.eventsList.getElement());
    render(new CreationFormView(), this.eventsList.getElement());

    for (let i = 0; i < 3; i++) {
      render(new WaypointListView(), this.eventsList.getElement());
    }
  }
}

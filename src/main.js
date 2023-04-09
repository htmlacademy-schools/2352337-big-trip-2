import NewFilterView from './view/filter-view';
import NewSortView from './view/sort-view';
import TripPresenter from './presenter/trip-presenter';
import { render } from './render.js';

const tripControlsFilter = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const tripPresenter = new TripPresenter();

render(new NewFilterView(), tripControlsFilter);
render(new NewSortView(), tripEvents);

tripPresenter.init();

import {render} from './render.js';
import MainNavigationView from './view/main-navigation-view.js';
import ProfileRatingView from './view/profile-rating-view.js';
import FilterSortView from './view/sort-view.js';
import FilmsStatisticsView from './view/films-statistics-view.js';
import FilmsPresenter from './presenter/films-presenter.js';
import FilmPopupPresenter from './presenter/film-popup-presenter.js';

const siteBodyElement = document.querySelector('body');
const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const footerStatisticContainer = document.querySelector('.footer__statistics');
const filmsPresenter = new FilmsPresenter();
const filmDetailsPresenter = new FilmPopupPresenter();

render(new MainNavigationView(), siteMainElement);
render(new ProfileRatingView(), siteHeaderElement);
render(new FilterSortView(), siteMainElement);

filmsPresenter.init(siteMainElement);

render(new FilmsStatisticsView(), footerStatisticContainer);

filmDetailsPresenter.init(siteBodyElement);

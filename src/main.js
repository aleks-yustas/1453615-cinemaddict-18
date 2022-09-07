import {render} from './render.js';
import MainNavigationView from './view/main-navigation-view.js';
import ProfileRatingView from './view/profile-rating-view.js';
import FilterSortView from './view/sort-view.js';
import FilmsStatisticsView from './view/films-statistics-view.js';
import FilmsPresenter from './presenter/films-presenter.js';
import FilmPopupPresenter from './presenter/film-popup-presenter.js';
import FilmModel from './model/film-model.js';
import CommentModel from './model/comment-model.js';

// import {getRandomDate} from './utils.js';

const siteBodyElement = document.querySelector('body');
const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const footerStatisticContainer = document.querySelector('.footer__statistics');
const filmsPresenter = new FilmsPresenter();
const filmDetailsPresenter = new FilmPopupPresenter();
const filmModel = new FilmModel();
const commentModel = new CommentModel();

render(new MainNavigationView(), siteMainElement);
render(new ProfileRatingView(), siteHeaderElement);
render(new FilterSortView(), siteMainElement);

filmsPresenter.init(siteMainElement, filmModel);

render(new FilmsStatisticsView(), footerStatisticContainer);

filmDetailsPresenter.init(siteBodyElement, filmModel, commentModel);

// console.log(dayjs().add(2, 'hour').toDate());
// console.log(dayjs().year());
// console.log(dayjs('2019-05-11T00:00:00.000Z'));
// console.log(dayjs('2019-05-11T00:00:00.000Z').getHours);

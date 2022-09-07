import {createElement} from '../render.js';

const MAX_DESCRIPTION_SYMBOLS = 140;
const CONTROL_ACTIVE_CLASS = 'film-card__controls-item--active';

const cutText = (text) => text.length > MAX_DESCRIPTION_SYMBOLS ? `${text.slice(0, MAX_DESCRIPTION_SYMBOLS - 1)}…` : text;

const createFilmCardTemplate = (film) => {
  const {comments, filmInfo: {title, totalRating, poster, runtime, genre, description}, userDetails: {watchlist, alreadyWatched, favorite}} = film;

  const commentsCount = comments.length;

  const genreInfo = genre[0];

  const descriprionText = cutText(description);

  const watchlistActiveClass = watchlist ? CONTROL_ACTIVE_CLASS : '';
  const alreadyWatchedActiveClass = alreadyWatched ? CONTROL_ACTIVE_CLASS : '';
  const favoriteActiveClass = favorite ? CONTROL_ACTIVE_CLASS : '';

  return (
    `<article class="film-card">
      <a class="film-card__link">
        <h3 class="film-card__title">${title}</h3>
        <p class="film-card__rating">${totalRating}</p>
        <p class="film-card__info">
          <span class="film-card__year">1929</span>
          <span class="film-card__duration">${runtime}</span>
          <span class="film-card__genre">${genreInfo}</span>
        </p>
        <img src="./${poster}" alt="" class="film-card__poster">
        <p class="film-card__description">${descriprionText}</p>
        <span class="film-card__comments">${commentsCount} comments</span>
      </a>
      <div class="film-card__controls">
        <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${watchlistActiveClass}" type="button">Add to watchlist</button>
        <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${alreadyWatchedActiveClass}" type="button">Mark as watched</button>
        <button class="film-card__controls-item film-card__controls-item--favorite ${favoriteActiveClass}" type="button">Mark as favorite</button>
      </div>
    </article>`
  );
};

export default class FilmCardView {
  constructor(film) {
    this.film = film;
  }

  getTemplate() {
    return createFilmCardTemplate(this.film);
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

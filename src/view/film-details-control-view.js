import {createElement} from '../render.js';

const CONTROL_ACTIVE_CLASS = 'film-details__control-button--active';

const createFilmDetailControlTemplate = ({userDetails: {watchlist, alreadyWatched, favorite}}) => {
  const watchlistActiveClass = watchlist ? CONTROL_ACTIVE_CLASS : '';
  const alreadyWatchedActiveClass = alreadyWatched ? CONTROL_ACTIVE_CLASS : '';
  const favoriteActiveClass = favorite ? CONTROL_ACTIVE_CLASS : '';

  return (
    `<section class="film-details__controls">
      <button type="button" class="film-details__control-button ${watchlistActiveClass} film-details__control-button--watchlist" id="watchlist" name="watchlist">Add to watchlist</button>
      <button type="button" class="film-details__control-button ${alreadyWatchedActiveClass} film-details__control-button--watched" id="watched" name="watched">Already watched</button>
      <button type="button" class="film-details__control-button ${favoriteActiveClass} film-details__control-button--favorite" id="favorite" name="favorite">Add to favorites</button>
    </section>`
  );
};

export default class FilmDetailsControlView {
  constructor(film) {
    this.film = film;
  }

  getTemplate() {
    return createFilmDetailControlTemplate(this.film);
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

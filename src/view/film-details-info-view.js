import {createElement} from '../render.js';
import {humanizeRuntime} from '../utils.js';
import dayjs from 'dayjs';

const createFilmDetailInfoTemplate = (film) => {
  const {filmInfo: {title, alternativeTitle, totalRating, poster, ageRating, director, writers, actors, release: {date, releaseCountry}, runtime, genre, description}} = film;

  const filmWriters = writers.join(', ');

  const filmActors = actors.join(', ');

  const releaseDate = dayjs(date).format('DD MMMM YYYY');

  const filmRuntime = humanizeRuntime(runtime);

  return (
    `<div class="film-details__info-wrap">
      <div class="film-details__poster">
        <img class="film-details__poster-img" src="./${poster}" alt="">
        <p class="film-details__age">${ageRating}</p>
      </div>
      <div class="film-details__info">
        <div class="film-details__info-head">
          <div class="film-details__title-wrap">
            <h3 class="film-details__title">${title}</h3>
            <p class="film-details__title-original">Original: ${alternativeTitle}</p>
          </div>
          <div class="film-details__rating">
            <p class="film-details__total-rating">${totalRating}</p>
          </div>
        </div>
        <table class="film-details__table">
          <tr class="film-details__row">
            <td class="film-details__term">Director</td>
            <td class="film-details__cell">${director}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Writers</td>
            <td class="film-details__cell">${filmWriters}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Actors</td>
            <td class="film-details__cell">${filmActors}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Release Date</td>
            <td class="film-details__cell">${releaseDate}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Runtime</td>
            <td class="film-details__cell">${filmRuntime}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Country</td>
            <td class="film-details__cell">${releaseCountry}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Genres</td>
            <td class="film-details__cell">
              ${genre.map((item) => `<span class="film-details__genre">${item}</span>`).join('')}
            </td>
          </tr>
        </table>
        <p class="film-details__film-description">${description}</p>
      </div>
    </div>`
  );
};

export default class FilmDetailsInfoView {
  constructor(film) {
    this.film = film;
  }

  getTemplate() {
    return createFilmDetailInfoTemplate(this.film);
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

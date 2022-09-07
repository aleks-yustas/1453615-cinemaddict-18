import {generateFilm} from '../mock/film.js';

const FILMS_COUNT = 15;

export default class FilmsModel {
  films = Array.from({length: FILMS_COUNT}, generateFilm);

  getFilms = () => this.films;
}

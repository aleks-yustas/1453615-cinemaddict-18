import {createElement} from '../render.js';

const createFilmDetailCloseButtonTemplate = () => (
  `<div class="film-details__close">
    <button class="film-details__close-btn" type="button">close</button>
  </div>`
);

export default class FilmDetailsCloseButtonView {
  getTemplate() {
    return createFilmDetailCloseButtonTemplate();
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

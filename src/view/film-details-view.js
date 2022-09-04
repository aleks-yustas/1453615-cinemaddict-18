import {createElement} from '../render.js';

const createFilmDetailsTemplate = () => (
  `<section class="film-details">
    <div class="film-details__inner"></div>
  </div>`
);

export default class FilmDetailsView {
  getTemplate() {
    return createFilmDetailsTemplate();
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

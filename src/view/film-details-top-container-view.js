import {createElement} from '../render.js';

const createFilmDetailTopContainerTemplate = () => '<div class="film-details__top-container"></div>';

export default class FilmDetailsTopContainerView {
  getTemplate() {
    return createFilmDetailTopContainerTemplate();
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

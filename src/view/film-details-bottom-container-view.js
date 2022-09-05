import {createElement} from '../render.js';

const createFilmDetailBottomContainerTemplate = () => '<div class="film-details__bottom-container"></div>';

export default class FilmDetailsBottomContainerView {
  getTemplate() {
    return createFilmDetailBottomContainerTemplate();
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

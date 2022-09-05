import {createElement} from '../render.js';

const createFilmsStatisticsTemplate = () => '<p>130 291 movies inside</p>';

export default class FilmsStatisticsView {
  getTemplate() {
    return createFilmsStatisticsTemplate();
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

import {createElement} from '../render.js';
import {humanizeDateDiff} from '../utils.js';

const createFilmDetailCommentsListTemplate = (comments) => {
  const commentsTemplate = comments.map(({author, comment, date, emotion}) => {
    const formatedDate = humanizeDateDiff(date);

    return (
      `<li class="film-details__comment">
        <span class="film-details__comment-emoji">
          <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-${emotion}">
        </span>
        <div>
          <p class="film-details__comment-text">${comment}</p>
          <p class="film-details__comment-info">
            <span class="film-details__comment-author">${author}</span>
            <span class="film-details__comment-day">${formatedDate}</span>
            <button class="film-details__comment-delete">Delete</button>
          </p>
        </div>
      </li>`
    );
  }).join('');

  return (
    `<ul class="film-details__comments-list">
      ${commentsTemplate}
    </ul>`);
};

export default class FilmDetailsCommentsListView {
  constructor(comments) {
    this.comments = comments;
  }

  getTemplate() {
    return createFilmDetailCommentsListTemplate(this.comments);
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

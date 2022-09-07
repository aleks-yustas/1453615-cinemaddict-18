import {render} from '../render.js';
import FilmDetailsView from '../view/film-details-view.js';
import FilmDetailsTopContainerView from '../view/film-details-top-container-view.js';
import FilmDetailsBottomContainerView from '../view/film-details-bottom-container-view.js';
import FilmDetailsCloseButtonView from '../view/film-details-close-button-view.js';
import FilmDetailsInfoView from '../view/film-details-info-view.js';
import FilmDetailsControlView from '../view/film-details-control-view.js';
import FilmDetailsCommentsListView from '../view/film-details-comments-list-view.js';
import FilmDetailsCommentsFormView from '../view/film-details-comments-form-view.js';

const FILM_POPUP_INDEX = 0;

export default class FilmPopupPresenter {
  filmPopup = new FilmDetailsView();
  filmPopupTopContainer = new FilmDetailsTopContainerView();
  filmPopupBottomContainer = new FilmDetailsBottomContainerView();

  init(popupContainer, filmModel, commentModel) {
    this.filmPopupContainer = popupContainer;
    this.filmPopupContainer.classList.add('hide-overflow');
    this.filmModel = filmModel;
    this.commentModel = commentModel;
    this.film = [...this.filmModel.getFilms()][FILM_POPUP_INDEX];
    this.comments = [...this.commentModel.getComments()].filter((comment) => (
      this.film.comments.some((fimCommentId) => fimCommentId === comment.id)
    ));

    render(this.filmPopup, this.filmPopupContainer);
    render(this.filmPopupTopContainer, this.filmPopup.getElement());
    render(new FilmDetailsCloseButtonView(), this.filmPopupTopContainer.getElement());
    render(new FilmDetailsInfoView(this.film), this.filmPopupTopContainer.getElement());
    render(new FilmDetailsControlView(this.film), this.filmPopupTopContainer.getElement());

    render(this.filmPopupBottomContainer, this.filmPopup.getElement());
    render(new FilmDetailsCommentsListView(this.comments), this.filmPopupBottomContainer.getElement());
    render(new FilmDetailsCommentsFormView(), this.filmPopupBottomContainer.getElement());
  }
}

import {render} from '../render.js';
import FilmsView from '../view/films-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import LoadMoreButtonView from '../view/load-more-button-view.js';

export default class FilmsPresenter {
  filmsComponent = new FilmsView();
  filmsListComponent = new FilmsListView();
  filmsListContainer = new FilmsListContainerView();

  init(filmsContainer) {
    this.filmsContainer = filmsContainer;

    render(this.filmsComponent, this.filmsContainer);
    render(this.filmsListComponent, this.filmsComponent.getElement());
    render(this.filmsListContainer, this.filmsListComponent.getElement());

    for (let i = 0; i < 5; i++) {
      render(new FilmCardView(), this.filmsListContainer.getElement());
    }

    render(new LoadMoreButtonView(), this.filmsListComponent.getElement());
  }
}

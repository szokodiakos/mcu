import { combineEpics } from 'redux-observable';
import { push } from 'react-router-redux';
import { map } from 'rxjs/operators';
import _camelCase from 'lodash.camelcase';
import _kebabCase from 'lodash.kebabcase';

import { movieDetailsActionType, fetchMovieDetailsSuccess, fetchMovieDetailsNotFound } from './movie-details.actions';

const fetchMovieDetailsEpic = (action$, store, { repo }) => action$.ofType(movieDetailsActionType.FETCH_MOVIE_DETAILS).pipe(
  map(action => action.payload),
  map(_camelCase),
  map(movieID => repo.getMovieByID(movieID)),
  map(movie => movie
    ? fetchMovieDetailsSuccess(movie)
    : fetchMovieDetailsNotFound()
  ),
);

const navigateToCharacterDetailsEpic = action$ => action$.ofType(movieDetailsActionType.NAVIGATE_TO_CHARACTER_DETAILS).pipe(
  map(action => action.payload),
  map(_kebabCase),
  map(url => push(`/characters/${url}`)),
);

export default combineEpics(
  fetchMovieDetailsEpic,
  navigateToCharacterDetailsEpic,
);

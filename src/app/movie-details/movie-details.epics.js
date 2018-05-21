import { combineEpics } from 'redux-observable';
import { map } from 'rxjs/operators';
import _camelCase from 'lodash.camelcase';

import { movieDetailsActionType, fetchMovieDetailsSuccess, fetchMovieDetailsNotFound } from './movie-details.actions';

const fetchMovieDetailsEpic = (action$, store, { movieRepo }) => action$.ofType(movieDetailsActionType.FETCH_MOVIE_DETAILS).pipe(
  map(action => action.payload),
  map(_camelCase),
  map(movieID => movieRepo.getByID(movieID, store.getState().entities)),
  map(movie => movie
    ? fetchMovieDetailsSuccess(movie)
    : fetchMovieDetailsNotFound()
  ),
);

export default combineEpics(
  fetchMovieDetailsEpic,
);

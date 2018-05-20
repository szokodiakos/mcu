import { combineEpics } from 'redux-observable';

import { movieDetailsActionType, fetchMovieDetailsSuccess, fetchMovieDetailsNotFound } from './movie-details.actions';
import { map, switchMap } from 'rxjs/operators';

const fetchMovieDetailsEpic = (action$, store, { movieRepo }) => action$.ofType(movieDetailsActionType.FETCH_MOVIE_DETAILS).pipe(
  map(action => action.payload),
  switchMap(movieTitle => movieRepo.getByURL(movieTitle)),
  map(movie => movie
    ? fetchMovieDetailsSuccess(movie)
    : fetchMovieDetailsNotFound()
  ),
);

export default combineEpics(
  fetchMovieDetailsEpic,
);

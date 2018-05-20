import { combineEpics } from 'redux-observable';

import { movieDetailsActionType, fetchMovieDetailsSuccess, fetchMovieDetailsFailed } from './movie-details.actions';
import { map, switchMap } from 'rxjs/operators';

const fetchMovieDetailsEpic = (action$, store, { movieRepo }) => action$.ofType(movieDetailsActionType.FETCH_MOVIE_DETAILS).pipe(
  map(action => action.payload),
  switchMap(movieName => movieRepo.getByURL(movieName)),
  map(movie => movie
    ? fetchMovieDetailsSuccess(movie)
    : fetchMovieDetailsFailed()
  ),
);

export default combineEpics(
  fetchMovieDetailsEpic,
);

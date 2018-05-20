import { combineEpics } from 'redux-observable';
import { push } from 'react-router-redux';
import { map, switchMap } from 'rxjs/operators';

import { moviesActionType, fetchMoviesSuccess } from './movies.actions';

const fetchMoviesEpic = (action$, store, { movieRepo }) => action$.ofType(moviesActionType.FETCH_MOVIES).pipe(
  switchMap(() => movieRepo.getAll()),
  map(movies => fetchMoviesSuccess(movies)),
);

const navigateToMovieDetailsEpic = action$ => action$.ofType(moviesActionType.NAVIGATE_TO_MOVIE_DETAILS).pipe(
  map(action => action.payload),
  map(movie => movie.toURL()),
  map(url => push(`/movies/${url}`)),
);

export default combineEpics(
  fetchMoviesEpic,
  navigateToMovieDetailsEpic,
);

import { combineEpics } from 'redux-observable';
import { push } from 'react-router-redux';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { moviesActionType, fetchMoviesSuccess } from './movies.actions';
import movieNameToURL from '../../domain/movie/movie-name-to-url';

const fetchMoviesEpic = (action$, store, { movieRepo }) => action$.ofType(moviesActionType.FETCH_MOVIES).pipe(
  switchMap(() => movieRepo.getAll()),
  map(movies => fetchMoviesSuccess(movies)),
);

const navigateToMovieDetails = action$ => action$.ofType(moviesActionType.NAVIGATE_TO_MOVIE_DETAILS).pipe(
  map(action => action.payload),
  map(movieNameToURL),
  map(url => push(`/movies/${url}`)),
);

export default combineEpics(
  fetchMoviesEpic,
  navigateToMovieDetails,
);

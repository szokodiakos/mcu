import { combineEpics } from 'redux-observable';
import { push } from 'react-router-redux';
import { map } from 'rxjs/operators';
import _kebabCase from 'lodash.kebabcase';

import { moviesActionType, fetchMoviesSuccess } from './movies.actions';

const fetchMoviesEpic = (action$, store, { repo }) => action$.ofType(moviesActionType.FETCH_MOVIES).pipe(
  map(() => repo.getAllMovies()),
  map(movies => fetchMoviesSuccess(movies)),
);

const navigateToMovieDetailsEpic = action$ => action$.ofType(moviesActionType.NAVIGATE_TO_MOVIE_DETAILS).pipe(
  map(action => action.payload),
  map(_kebabCase),
  map(url => push(`/movies/${url}`)),
);


export default combineEpics(
  fetchMoviesEpic,
  navigateToMovieDetailsEpic,
);

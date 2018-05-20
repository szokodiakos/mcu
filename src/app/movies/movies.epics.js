import { combineEpics } from 'redux-observable';
import { push } from 'react-router-redux';
import { map, switchMap, mapTo } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { moviesActionType, fetchMoviesSuccess } from './movies.actions';
import { commonActionType } from '../common/common.actions';

const fetchMoviesEpic = (action$, store, { moviesRepo }) => action$.ofType(commonActionType.FETCH_MOVIES).pipe(
  mapTo(store.getState()),
  switchMap((state) => {
    const areMoviesAlreadyInStore = state.movies.length;
    if (areMoviesAlreadyInStore) {
      return of(store.movies);
    }
    return moviesRepo.getAll();
  }),
  map(movies => fetchMoviesSuccess(movies)),
);

const pushMovieDetailsEpic = action$ => action$.ofType(moviesActionType.SHOW_MOVIE_DETAILS).pipe(
  map(action => action.payload),
  map(movieNameToURL),
  map(url => push(`/movies/${url}`)),
);

const movieNameToURL = (movieName) => movieName.toLowerCase().replace(/\s/g, '-');

export default combineEpics(
  fetchMoviesEpic,
  pushMovieDetailsEpic,
);

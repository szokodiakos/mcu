import { combineEpics } from 'redux-observable';
import { push } from 'react-router-redux';
import { mapTo, tap, map } from 'rxjs/operators';

import { moviesActionType, fetchMoviesSuccess } from './movies.actions';

const fetchMoviesEpic = action$ => action$.ofType(moviesActionType.FETCH_MOVIES).pipe(
  mapTo(fetchMoviesSuccess([{ name: 'The Avengers' }])),
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

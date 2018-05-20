import { combineEpics } from 'redux-observable';
import { mapTo } from 'rxjs/operators';

import { moviesActionType, fetchMoviesSuccess } from './movies.actions';

const fetchMoviesEpic = action$ => action$.ofType(moviesActionType.FETCH_MOVIES).pipe(
  mapTo(fetchMoviesSuccess([{ name: 'The Avengers' }])),
);

export default combineEpics(
  fetchMoviesEpic,
);

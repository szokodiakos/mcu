import { combineEpics } from 'redux-observable';

import moviesEpics from '../movies/movies.epics';

const rootEpic = combineEpics(
  moviesEpics,
);

export default rootEpic;

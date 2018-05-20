import { combineEpics } from 'redux-observable';

import moviesEpic from '../movies/movies.epic';

const rootEpic = combineEpics(
  moviesEpic,
);

export default rootEpic;

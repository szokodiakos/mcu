import { combineEpics } from 'redux-observable';

import moviesEpics from '../movies/movies.epics';
import movieDetailsEpics from '../movie-details/movie-details.epics';

const rootEpic = combineEpics(
  moviesEpics,
  movieDetailsEpics,
);

export default rootEpic;

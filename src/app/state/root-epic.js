import { combineEpics } from 'redux-observable';

import moviesEpics from '../movies/movies.epics';
import movieDetailsEpics from '../movie-details/movie-details.epics';
import characterDetailsEpics from '../character-details/character-details.epics';

const rootEpic = combineEpics(
  moviesEpics,
  movieDetailsEpics,
  characterDetailsEpics,
);

export default rootEpic;

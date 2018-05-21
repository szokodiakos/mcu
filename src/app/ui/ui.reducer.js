import { combineReducers } from 'redux';

import moviesReducer from '../movies/movies.reducer';
import movieDetailsReducer from '../movie-details/movie-details.reducer';
import characterDetailsReducer from '../character-details/character-details.reducer';

const uiReducer = combineReducers({
  movies: moviesReducer,
  movieDetails: movieDetailsReducer,
  characterDetails: characterDetailsReducer,
});

export default uiReducer;

import { combineReducers } from 'redux';

import moviesReducer from '../movies/movies.reducer';
import movieDetailsReducer from '../movie-details/movie-details.reducer';

const uiReducer = combineReducers({
  movies: moviesReducer,
  movieDetails: movieDetailsReducer,
});

export default uiReducer;

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import moviesReducer from '../movies/movies.reducer';
import movieDetailsReducer from '../movie-details/movie-details.reducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  movieDetails: movieDetailsReducer,
  router: routerReducer,
});

export default rootReducer;

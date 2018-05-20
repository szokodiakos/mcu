import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import moviesReducer from '../movies/movies.reducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  router: routerReducer,
});

export default rootReducer;

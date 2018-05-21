import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootEpic from './root-epic';
import rootReducer from './root-reducer';
import history from './history';
import MovieRepo from '../../domain/movie/movie-repo';

const epicMiddleware = createEpicMiddleware(rootEpic, { dependencies: { movieRepo: new MovieRepo() }});
const routerMiddleware = createRouterMiddleware(history);

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        epicMiddleware,
        routerMiddleware,
      ),
    ),
  );
  return store;
}

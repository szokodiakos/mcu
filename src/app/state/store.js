import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';

import rootEpic from './root-epic';
import rootReducer from './root-reducer';
import history from './history';

const epicMiddleware = createEpicMiddleware(rootEpic);
const routerMiddleware = createRouterMiddleware(history);

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      epicMiddleware,
      routerMiddleware,
    ),
  );
  return store;
}

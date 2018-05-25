import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootEpic from './root-epic';
import rootReducer from './root-reducer';
import history from './history';
import Repo from '../data/repo';
import entities from '../data/entities';

const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: { repo: new Repo(entities) },
});
const routerMiddleware = createRouterMiddleware(history);

export default function configureStore() {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware, routerMiddleware)));
  return store;
}

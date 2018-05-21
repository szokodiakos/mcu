import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import entitiesReducer from '../entities/entities.reducer';
import uiReducer from '../ui/ui.reducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  entities: entitiesReducer,
  router: routerReducer,
});

export default rootReducer;

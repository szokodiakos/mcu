import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import uiReducer from '../ui/ui.reducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  router: routerReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';

import movies from './movies';
import globalError from './globalError';
import globalLoading from './globalLoading';

const appReducer = combineReducers({
  movies,
  error: globalError,
  globalLoading
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;

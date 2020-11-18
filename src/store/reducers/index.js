import { combineReducers} from 'redux';

import favouritesReducer from './favouritesReducer';
import moviesReducer from './moviesReducer';

export default combineReducers({
  favouritesReducer,
  moviesReducer
});
import { combineReducers } from 'redux';
import postReducer from './postToolkitReducer/reducer';

export default combineReducers({
  posts: postReducer
});
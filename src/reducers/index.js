import { combineReducers } from 'redux';
import peopleReducer from './peopleReducer';
import pageReducer from './pageReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  people: peopleReducer,
  pageNum: pageReducer,
  error: errorReducer
});

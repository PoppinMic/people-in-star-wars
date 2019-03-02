import { combineReducers } from 'redux';
import peopleReducer from './peopleReducer';
import pageReducer from './pageReducer';
import errorReducer from './errorReducer';
import filmsReducer from './filmsReducer';

export default combineReducers({
  people: peopleReducer,
  pageNum: pageReducer,
  films: filmsReducer,
  error: errorReducer
});

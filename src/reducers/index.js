import { combineReducers } from 'redux';
import peopleReducer from './peopleReducer';
import pageReducer from './pageReducer';
import errorReducer from './errorReducer';
import filmsReducer from './filmsReducer';
import popUpRedcuer from './popUpReducer';

export default combineReducers({
  people: peopleReducer,
  pageNum: pageReducer,
  films: filmsReducer,
  error: errorReducer,
  showPopUp: popUpRedcuer
});

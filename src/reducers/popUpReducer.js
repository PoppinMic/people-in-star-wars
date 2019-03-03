import { TOGGLE_POPUP } from '../actions/actionTypes';

const popUpRedcuer = (state = false, { type }) => {
  switch (type) {
    case TOGGLE_POPUP:
      return !state;
    default:
      return state;
  }
};

export default popUpRedcuer;

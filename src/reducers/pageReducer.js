import { NEXT_PAGE, PREV_PAGE } from '../actions/actionTypes';

const pageReducer = (state = 1, { type }) => {
  switch (type) {
    case NEXT_PAGE:
      return state < 9 ? state + 1 : state;
    case PREV_PAGE:
      return state > 1 ? state - 1 : state;
    default:
      return state;
  }
};

export default pageReducer;

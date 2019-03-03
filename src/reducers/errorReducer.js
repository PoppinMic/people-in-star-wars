import { REQ_PEOPLE_FAIL, REQ_FILMS_FAIL } from '../actions/actionTypes';

const errorReducer = (state = { errMs: null }, { type, error }) => {
  switch (type) {
    case REQ_PEOPLE_FAIL:
      return { ...state, errMs: `People data request failed: ${error}` };
    case REQ_FILMS_FAIL:
      return { ...state, errMs: `Films data request failed: ${error}` };

    default:
      return state;
  }
};

export default errorReducer;

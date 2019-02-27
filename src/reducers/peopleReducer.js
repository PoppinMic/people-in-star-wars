import { RES_PEOPLE } from '../actions/actionTypes';

const defaultState = {
  isLoaded: false,
  pageNum: 1,
  payload: []
};

const peopleReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case RES_PEOPLE:
      return {
        ...state,
        payload,
        isLoaded: true
      };
    default:
      return state;
  }
};

export default peopleReducer;

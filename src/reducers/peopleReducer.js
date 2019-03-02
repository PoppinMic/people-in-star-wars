import { RES_PEOPLE, REQ_PEOPLE } from '../actions/actionTypes';

const defaultState = {
  isLoaded: false,
  pageNum: 1,
  payload: []
};

const peopleReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case REQ_PEOPLE:
      return { ...state, isLoaded: false };
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

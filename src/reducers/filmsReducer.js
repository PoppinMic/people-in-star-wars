// We can use reselect for films query but it actually just need to request once.
import { RES_FILMS } from '../actions/actionTypes';
import { arrayToDict } from '../helper';
const defaultState = {
  isLoaded: false
};

const filmsReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case RES_FILMS: {
      // Shape films payload into an Object Dictionary
      const filmsDict = arrayToDict(payload.results, 'title', 'url');
      return {
        ...state,
        filmsDict,
        isLoaded: true
      };
    }

    default:
      return state;
  }
};

export default filmsReducer;

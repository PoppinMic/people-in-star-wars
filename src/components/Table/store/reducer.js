import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	payload: []
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.FETCH_PEOPLE_LIST:
			return state.set('payload', action.payload);
		default:
			return state;
	}
}
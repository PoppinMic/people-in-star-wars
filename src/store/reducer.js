import { combineReducers } from 'redux-immutable';
import { reducer as tableReducer } from '../components/Table/store';

const reducer = combineReducers({
	header: tableReducer
});

export default reducer;
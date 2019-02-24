import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { getPeopleList } from '../components/Table/store/actions';

function* fetchList(pageNum) {
  try {
    const res = yield axios.get(`https://swapi.co/api/people/?page=${pageNum}`);
    const action = getPeopleList(res.data);
    yield put(action);
  } catch (e) {
    console.error('FETCH_LIST FAILED.', e.message);
  }
}

function* sagas() {
  yield takeEvery('LIST_FETCH_REQUESTED', fetchList);
}

export default sagas;
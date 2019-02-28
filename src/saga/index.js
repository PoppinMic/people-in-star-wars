import {
  all,
  fork,
  put,
  call,
  takeEvery,
  take,
  select
} from 'redux-saga/effects';
import * as API from '../api';
import {
  REQ_PEOPLE,
  RES_PEOPLE,
  REQ_PEOPLE_FAIL,
  PREV_PAGE,
  NEXT_PAGE
} from '../actions/actionTypes';
// import { responsePeople } from '../actions';

export const currentPage = state => state.pageNum;
export const totalPages = state => {
  const { count, results } = state.people.payload;
  return Math.ceil(count / results.length);
};
function* getPeopleData() {
  // Listen to fetch people list action
  try {
    const pageNum = yield select(currentPage);
    const res = yield call(API.fetchPeopleList, pageNum);

    yield put({ type: RES_PEOPLE, payload: res.data });
    // yield put(responsePeople(pageNum, res.data));
  } catch (error) {
    yield put({ type: REQ_PEOPLE_FAIL, error });
  }
}

function* handlePageChange() {
  try {
    const pageNum = yield select(currentPage);
    const maxPageNum = yield select(totalPages);
    if (pageNum > 1 && pageNum <= maxPageNum) {
      const res = yield call(API.fetchPeopleList, pageNum);
      yield put({ type: RES_PEOPLE, payload: res.data });
    }
  } catch (error) {
    yield put({ type: REQ_PEOPLE_FAIL, error });
  }
}

// Watchers
function* watchTable() {
  yield take(REQ_PEOPLE);
  yield call(getPeopleData);
  yield takeEvery([NEXT_PAGE, PREV_PAGE], handlePageChange);
}

export default function* rootSaga() {
  yield all([fork(watchTable)]);
}

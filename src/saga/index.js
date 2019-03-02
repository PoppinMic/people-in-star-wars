import { all, fork, put, call, takeEvery, select } from 'redux-saga/effects';
import * as API from '../api';
import {
  REQ_PEOPLE,
  RES_PEOPLE,
  REQ_PEOPLE_FAIL,
  PREV_PAGE,
  NEXT_PAGE,
  REQ_FILMs,
  RES_FILMS,
  REQ_FILMS_FAIL
} from '../actions/actionTypes';
// import { responsePeople } from '../actions';

// !selectors
export const currentPage = state => state.pageNum;
export const totalPages = state => {
  const { count, results } = state.people.payload;
  return Math.ceil(count / results.length);
};
export const filmsDataLoaded = state => state.films.isLoaded;

function* getPeopleData() {
  // Listen to fetch people list action
  try {
    const pageNum = yield select(currentPage);

    const res = yield call(API.fetchPeopleList, pageNum);

    yield put({ type: RES_PEOPLE, payload: res.data });
    // yield put(responsePeople(pageNum, res.data));
    // The above line is an alternative way.
  } catch (error) {
    yield put({ type: REQ_PEOPLE_FAIL, error });
  }
}

function* getFilmsData() {
  // Listen to fetch people list action
  try {
    const filmsLoaded = yield select(filmsDataLoaded);
    if (!filmsLoaded) {
      const res = yield call(API.fetchFilmsInfo);
      yield put({ type: RES_FILMS, payload: res.data });
    }
  } catch (error) {
    yield put({ type: REQ_FILMS_FAIL, error });
  }
}

// ! Should be able to merge the function - getPeopleData
function* handlePageChange() {
  try {
    const pageNum = yield select(currentPage);
    const maxPageNum = yield select(totalPages);
    if (pageNum > 1 && pageNum <= maxPageNum) {
      yield put({ type: REQ_PEOPLE });
      const res = yield call(API.fetchPeopleList, pageNum);
      yield put({ type: RES_PEOPLE, payload: res.data });
    }
  } catch (error) {
    yield put({ type: REQ_PEOPLE_FAIL, error });
  }
}

// Watchers
function* watchTable() {
  yield takeEvery(REQ_FILMs, getFilmsData);
  yield takeEvery(REQ_PEOPLE, getPeopleData);
  yield takeEvery([NEXT_PAGE, PREV_PAGE], handlePageChange);
}

export default function* rootSaga() {
  yield all([fork(watchTable)]);
}

import { all, fork, put, call, takeEvery, select } from 'redux-saga/effects';
import * as API from '../api';
import {
  REQ_PEOPLE,
  RES_PEOPLE,
  REQ_PEOPLE_FAIL,
  PAGE_CHANGE
} from '../actions/actionTypes';
import { nextPage, prevPage } from '../actions';

export const getPage = state => state.pageNum;

function* getPeople() {
  // Listen to fetch people list action
  try {
    const pageNum = yield select(getPage);
    const res = yield call(API.fetchPeopleList, pageNum);
    // !It's premature optimization
    // const peopleList = res.data.results.map(result => {
    //   return (({ url, name, height, mass }) => ({
    //     url,
    //     name,
    //     height,
    //     mass
    //   }))(result);
    // });
    yield put({ type: RES_PEOPLE, payload: res.data, pageNum });
  } catch (error) {
    yield put({ type: REQ_PEOPLE_FAIL, error });
  }
}

function* 


// Watchers
function* watchTable() {
  yield takeEvery(REQ_PEOPLE, getPeople);
  yield takeEvery(PAGE_CHANGE, nextPage);
}


export default function* rootSaga() {
  yield all([fork(watchTable)]);
}

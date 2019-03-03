import { runSaga } from 'redux-saga';

import { currentPage, totalPages, getPeopleData } from './index';
import * as API from '../api';
import { RES_PEOPLE } from '../actions/actionTypes';

describe('saga selectors', () => {
  test(`selector currentPage should return the pageNum of current`, () => {
    const pageNum = 3;
    const state = { pageNum };
    expect(currentPage(state)).toBe(pageNum);
  });

  test(`selector totalPage should return an Integer of total pages`, () => {
    const count = 102;
    const results = [1, 2, 3, 4, 5];
    const state = {
      people: {
        payload: {
          count,
          results
        }
      }
    };
    expect(totalPages(state)).toBe(21);
  });
});

describe('fetch data', () => {
  test(`fetch people data successfully`, async () => {
    const dispatchedActions = [];

    const mockedPeople = { data: ['people1', 'people2', 'people3'] };
    API.fetchPeopleList = jest.fn(() => Promise.resolve(mockedPeople));

    const fakeStore = {
      getState: () => ({ pageNum: 1 }),
      dispatch: action => dispatchedActions.push(action)
    };

    await runSaga(fakeStore, getPeopleData).done;

    expect(dispatchedActions).toContainEqual({
      type: RES_PEOPLE,
      payload: mockedPeople.data
    });
  });
});

import pageReducer from './pageReducer';
import { NEXT_PAGE, PREV_PAGE } from '../actions/actionTypes';

describe('page reducer', () => {
  it(`should return pageNum should not increase if it's 9`, () => {
    const pageNum = 9;
    expect(pageReducer(pageNum, { type: NEXT_PAGE })).toEqual(pageNum);
  });
  it(`should return pageNum should not decrease if it's 1`, () => {
    const pageNum = 1;
    expect(pageReducer(pageNum, { type: PREV_PAGE })).toEqual(pageNum);
  });

  it(`should return 2 or 4 when pageNum is 3 by decrease and increase`, () => {
    const pageNum = 3;
    expect(pageReducer(pageNum, { type: PREV_PAGE })).toBe(2);
    expect(pageReducer(pageNum, { type: NEXT_PAGE })).toBe(4);
  });
});

import { FETCH_PEOPLE_LIST } from './constants';

export const getPeopleList = payload => ({
  type: FETCH_PEOPLE_LIST,
  payload
});

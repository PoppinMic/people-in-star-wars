import { GET_PEOPLE_LIST } from './actionTypes';
import { IPayload } from '../interfaces';

export const getPeopleList = (payload: IPayload) => ({
  type: GET_PEOPLE_LIST,
  payload
});

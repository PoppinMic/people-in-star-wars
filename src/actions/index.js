import {
  REQ_PEOPLE,
  RES_PEOPLE,
  REQ_PEOPLE_FAIL,
  REQ_FILMs,
  RES_FILMS,
  REQ_FILMS_FAIL,
  NEXT_PAGE,
  PREV_PAGE
} from './actionTypes';

// People Actions
export const requestPeople = () => ({
  type: REQ_PEOPLE
});

// export const responsePeople = (pageNum, payload) => ({
//   type: RES_PEOPLE,
//   pageNum,
//   payload
// });

export const requestPeopleFail = error => ({
  type: REQ_PEOPLE_FAIL,
  error
});

// Film Actions
export const requestFilms = () => ({
  type: REQ_FILMs
});

export const responseFilms = filmsPayload => ({
  type: RES_FILMS,
  filmsPayload
});

export const requestFilmsFail = error => ({
  type: REQ_FILMS_FAIL,
  error
});

// Pagination
export const nextPage = {
  type: NEXT_PAGE
};

export const prevPage = {
  type: PREV_PAGE
};

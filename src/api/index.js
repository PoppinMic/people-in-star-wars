import axios from 'axios';

const BASE_URL = `https://swapi.co/api`;

export const fetchPeopleList = async pageNum => {
  try {
    return await axios.get(`${BASE_URL}/people/?page=${pageNum}`);
  } catch (error) {
    throw new Error(`Error in function fetchPeopelList: ${error}`);
  }
};

export const fetchFilmsInfo = async () => {
  try {
    return await axios.get(`${BASE_URL}/films`);
  } catch (error) {
    throw new Error(`Error in function fetchFilmsInfo: ${error}`);
  }
};

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import TableRow from './TableRow';
import Pagination from '../Pagination';
import { requestPeople, requestFilms, togglePopUp } from '../../actions';
import { matchDictKeysByArray } from '../../helper';
import PeopleDetails from '../PeopleDetails';
import { TableWrapper } from './styles';
const Table = ({
  peopleDataLoaded,
  filmsDataLoaded,
  payload,
  showPopUp,
  filmsDict,
  requestPeople,
  requestFilms,
  togglePopUp
}) => {
  const [filmsOfPeople, setFilmsOfPeople] = useState([]);
  const [resultIndex, setResultIndex] = useState(0);

  useEffect(() => {
    requestPeople();
    requestFilms();
  }, [requestFilms, requestPeople]);

  const handleTableRowClick = (filmsUrl, resultIndex) => async event => {
    const filmsList = matchDictKeysByArray(filmsUrl, filmsDict);
    setFilmsOfPeople(filmsList);
    await setResultIndex(resultIndex);
    togglePopUp();
  };

  return (
    <React.Fragment>
      <TableWrapper>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Height</th>
              <th>Mass</th>
            </tr>
          </thead>
          <tbody>
            {peopleDataLoaded && filmsDataLoaded ? (
              payload.results.map((result, index) => (
                <TableRow
                  key={result.url}
                  name={result.name}
                  height={result.height}
                  mass={result.mass}
                  onClick={handleTableRowClick(result.films, index)}
                />
              ))
            ) : (
              <tr>
                <td>Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </TableWrapper>

      {peopleDataLoaded ? <Pagination totalPage={payload.count} /> : null}
      {showPopUp && (
        <PeopleDetails
          name={payload.results[resultIndex].name}
          height={payload.results[resultIndex].height}
          birthY={payload.results[resultIndex].birth_year}
          gender={payload.results[resultIndex].gender}
          films={filmsOfPeople}
        />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  peopleDataLoaded: state.people.isLoaded,
  filmsDataLoaded: state.films.isLoaded,
  payload: state.people.payload,
  filmsDict: state.films.filmsDict,
  showPopUp: state.showPopUp
});

const mapDispatchToProps = dispatch => ({
  requestPeople: () => dispatch(requestPeople),
  requestFilms: () => dispatch(requestFilms),
  togglePopUp: () => dispatch(togglePopUp)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);

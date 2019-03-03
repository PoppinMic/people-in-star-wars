import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableRow from './TableRow';
import Pagination from '../Pagination';
import { requestPeople, requestFilms, togglePopUp } from '../../actions';
import { matchDictKeysByArray } from '../../helper';
import PeopleDetails from './PeopleDetails';
class Table extends Component {
  state = { filmsOfPeople: [], resultIndex: 0 };
  componentDidMount() {
    this.props.requestPeople();
    this.props.requestFilms();
  }

  handleTableRowClick = (filmsUrl, resultIndex) => event => {
    const { filmsDict } = this.props;
    const filmsList = matchDictKeysByArray(filmsUrl, filmsDict);
    this.setState(
      {
        filmsOfPeople: filmsList,
        resultIndex
      },
      () => {
        this.props.togglePopUp();
      }
    );
  };

  render() {
    const {
      peopleDataLoaded,
      filmsDataLoaded,
      payload,
      showPopUp
    } = this.props;
    const { filmsOfPeople, resultIndex } = this.state;
    return (
      <React.Fragment>
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
                  onClick={this.handleTableRowClick(result.films, index)}
                />
              ))
            ) : (
              <tr>
                <td>Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
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
  }
}

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

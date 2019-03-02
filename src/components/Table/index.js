import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableRow from './TableRow';
import Pagination from '../Pagination';
import { requestPeople, requestFilms } from '../../actions';
import { matchDictKeysByArray } from '../../helper';
import PeopleDetails from './PeopleDetails';
class Table extends Component {
  state = { detailPopped: false, filmsOfPeople: [], resultIndex: 0 };
  componentDidMount() {
    this.props.requestPeople();
    this.props.requestFilms();
  }
  handleTableRowClick = (filmsUrl, resultIndex) => event => {
    const { filmsDict } = this.props;
    const filmsList = matchDictKeysByArray(filmsUrl, filmsDict);
    this.setState({
      detailPopped: true,
      filmsOfPeople: filmsList,
      resultIndex
    });
  };
  render() {
    const { peopleDataLoaded, filmsDataLoaded, payload } = this.props;
    const { detailPopped, filmsOfPeople, resultIndex } = this.state;
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
        {detailPopped && (
          <PeopleDetails
            name={payload.results[resultIndex].name}
            height={payload.results[resultIndex].height}
            birthY={payload.results[resultIndex].birthY}
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
  filmsDict: state.films.filmsDict
});

const mapDispatchToProps = dispatch => ({
  requestPeople: () => dispatch(requestPeople),
  requestFilms: () => dispatch(requestFilms)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);

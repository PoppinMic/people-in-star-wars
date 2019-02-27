import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableRow from './TableRow';
import Pagination from '../Pagination';
import { requestPeople } from '../../actions';

class Table extends Component {
  // state = {
  //   listLoaded: false,
  //   pageNum: 1,
  //   peopleList: []
  // };
  componentDidMount() {
    this.props.requestPeople();
  }
  render() {
    const { isLoaded, payload } = this.props;
    console.log(payload);
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
            {isLoaded ? (
              payload.results.map(result => (
                <TableRow
                  key={result.url}
                  name={result.name}
                  height={result.height}
                  mass={result.mass}
                />
              ))
            ) : (
              <tr>
                <td>Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
        {isLoaded ? <Pagination totalPage={payload.count} /> : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isLoaded: state.people.isLoaded,
  pageNum: state.people.pageNum,
  payload: state.people.payload
});

const mapDispatchToProps = dispatch => ({
  requestPeople: () => dispatch(requestPeople())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);

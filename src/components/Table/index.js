import React, { PureComponent } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import TableRow from './TableRow';




class Table extends PureComponent {
  state = {
    payloads: []
  };
  async componentDidMount() {
    const res = await axios.get('https://swapi.co/api/people');
    // Clean data from api's response data - pick url, name, height and mass
    const payloads = res.data.results.map(result => {
      return (({ url, name, height, mass }) => ({
        url,
        name,
        height,
        mass
      }))(result);
    });

    this.setState({
      payloads
    });
  }
  render() {
    const { payloads } = this.state;
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
          </tr>
        </thead>
        <tbody>
          {payloads.length ? (
            payloads.map((record) => (
              <TableRow
                key={record.url}
                name={record.name}
                height={record.height}
                mass={record.mass}
              />
            ))
          ) : (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
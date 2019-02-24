import React, { PureComponent } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

import { IPayload } from '../interfaces';

interface ITableProps {}
interface ITableState {
  payloads: Array<object>;
}

class Table extends PureComponent<ITableProps, ITableState> {
  state = {
    payloads: []
  };
  async componentDidMount() {
    const res = await axios.get('https://swapi.co/api/people');
    // Clean data from api's response data - pick url, name, height and mass
    const payloads: Array<object> = res.data.results.map((result: IPayload) => {
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
            payloads.map((record: IPayload) => (
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

export default Table;

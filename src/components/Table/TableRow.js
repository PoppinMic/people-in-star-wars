import React from 'react';

const TableRow = ({ name, height, mass }) => (
  <tr>
    <td>{name}</td>
    <td>{height}</td>
    <td>{mass}</td>
  </tr>
);

export default TableRow;
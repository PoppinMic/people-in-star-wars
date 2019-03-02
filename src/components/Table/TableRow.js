import React from 'react';

const TableRow = ({ films, name, height, mass, onClick }) => (
  <tr data-films={films} onClick={onClick}>
    <td>{name}</td>
    <td>{height}</td>
    <td>{mass}</td>
  </tr>
);

export default TableRow;

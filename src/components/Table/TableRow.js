import React from 'react';
import { TBodyRow } from './styles';

const TableRow = ({ films, name, height, mass, onClick }) => (
  <TBodyRow data-films={films} onClick={onClick}>
    <td>{name}</td>
    <td>{height}</td>
    <td>{mass}</td>
  </TBodyRow>
);

export default TableRow;

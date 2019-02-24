import React from 'react';

interface ITableRowProps {
  name: string;
  height: string;
  mass: string;
}

const TableRow: React.SFC<ITableRowProps> = ({ name, height, mass }) => (
  <tr>
    <td>{name}</td>
    <td>{height}</td>
    <td>{mass}</td>
  </tr>
);

export default TableRow;

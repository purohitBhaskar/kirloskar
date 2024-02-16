import React from 'react';
import Cell from './Cell';

const Row = ({ item, columns }) => {
  return (
    <tr>
      {columns.map((column) => (
        <Cell key={column}>{item[column]}</Cell>
      ))}
    </tr>
  );
};

export default Row;
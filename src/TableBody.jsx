import React from 'react';
import Row from './Row';

const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data.map((item, index) => (
        <Row key={index} item={item} columns={columns} />
      ))}
    </tbody>
  );
};

export default TableBody;
import React from 'react';
import HeadCell from './HeadCell';

const TableHeader = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <HeadCell key={index}>{column}</HeadCell>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
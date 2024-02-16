import React from 'react';
import  './Table.css';

const Table = () => {
  return (
    <table className='table'>
      <thead className='firstRow'>
        <tr >
          <th className='header'>Energy Source </th>
          <th className='header'>Operating Hours</th>
          <th className='header'>Power Generated</th>
          <th className='header'>Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="data">Solar</td>
          <td className="data">426 hrs</td>
          <td className="data">46743 kWh</td>
          <td className="data">10,000</td>
        </tr>
        <tr>
          <td className="data">Wind</td>
          <td className="data">426 hrs</td>

          <td className="data">46743 kWh</td>
          <td className="data">10,000</td>
        </tr>
        <tr>
          <td className="data">Biogas</td>
          <td className="data">426 hrs</td>
          <td className="data">46743 kWh</td>
          <td className="data">10,000</td>
        </tr>
        <tr>
          <td className="data">ESS</td>
          <td className="data">426 hrs</td>
          <td className="data">46743 kWh</td>
          <td className="data">10,000</td>
        </tr>
        <tr>
          <td className="data">Genset</td>
          <td className="data">426 hrs</td>
          <td className="data">46743 kWh</td>
          <td className="data">10,000</td>
        </tr>
        <tr>
          <td className="data">Mains</td>
          <td className="data">426 hrs</td>
          <td className="data">46743 kWh</td>
          <td className="data">10,000</td>
        </tr>
      </tbody>
      <tfoot>
       
      </tfoot>
    </table>
  );
};

export default Table;
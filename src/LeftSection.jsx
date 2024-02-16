import React from 'react';
import Table from './Table';

const LeftSection = () => {
  return (
    <div className="left-section">
      <img src="your-image-url-here" alt="Your Image" className="image" />
      <Table />
    </div>
  );
};

const tableData = [
  {
    resource: 'Mains',
    operatingHours: '426 hrs',
    powerGenerated: '46743 kWh',
    cost: '10,000',
  },
  {
    resource: 'Genset',
    operatingHours: '3 hrs',
    powerGenerated: '27 kWh',
    cost: '10,000',
  },
  {
    resource: 'Solar',
    operatingHours: '3 hrs',
    powerGenerated: '27 kWh',
    cost: '',
  },
  {
    resource: 'Wind',
    operatingHours: '3 hrs',
    powerGenerated: '27 kWh',
    cost: '',
  },
  {
    resource: 'Biogas',
    operatingHours: '3 hrs',
    powerGenerated: '27 kWh',
    cost: '',
  },
];

const Table = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Resource</th>
          <th>Operating Hours</th>
          <th>Power Generated</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td>{row.resource}</td>
            <td>{row.operatingHours}</td>
            <td>{row.powerGenerated}</td>
            <td>{row.cost}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: '100%',
};

const leftSectionStyle = {
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderRight: '1px solid #ccc',
  boxSizing: 'border-box',
};

const imageStyle = {
  width: '100%',
  maxWidth: '300px',
  marginBottom: '20px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
};

const thStyle = {
  padding: '10px',
  textAlign: 'left',
  borderBottom: '1px solid #ccc',
};

const tdStyle = {
  padding: '10px',
  borderBottom: '1px solid #ccc',
};

export { LeftSection, containerStyle, leftSectionStyle, imageStyle, tableStyle, thStyle, tdStyle };
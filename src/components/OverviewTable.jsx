import React from 'react'
import './OverviewTable.css'
const OverviewTable = () => {
    return (
        <div>
            <p>Energy Resources</p>
            <table>
                <tr>
                    <th>Energy Source</th>
                    <th>Operating Hours</th>
                    <th>Power Generated</th>
                    <th>Cost</th>
                </tr>
                <tr>
                    <td>Solar</td>
                    <td>426 hrs</td>
                    <td>46743 kWh</td>
                    <td>$10,000</td>
                </tr>
                <tr>
                    <td>Wind</td>
                    <td>426 hrs</td>
                    <td>46743 kWh</td>
                    <td>$10,000</td>
                </tr>
                <tr>
                    <td>Biogas</td>
                    <td>426 hrs</td>
                    <td>46743 kWh</td>
                    <td>$10,000</td>
                </tr>
                <tr>
                    <td>ESS</td>
                    <td>426 hrs</td>
                    <td>46743 kWh</td>
                    <td>$10,000</td>
                </tr>
                <tr>
                    <td>Genset</td>
                    <td>426 hrs</td>
                    <td>46743 kWh</td>
                    <td>$10,000</td>
                </tr>
                <tr>
                    <td>Mains</td>
                    <td>426 hrs</td>
                    <td>46743 kWh</td>
                    <td>$10,000</td>
                </tr>
            </table>
        </div>
    )
}

export default OverviewTable
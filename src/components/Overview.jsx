import React from 'react'
import "../styles/Overview.css"
const Overview = () => {
  return (
    <div className='overview-container'>
      <div className="overview-section-left-section">
        <div className="overview-img-section"></div>
        <div className="overview-overview-table-section">
          <div className="overview-table-heading">
            Energy Resources
          </div>
          <div className="overview-table-body">
            <div className="table-body-row" id="row-1">
              <div className="heading-energy-source">Energy Source</div>
              <div className="heading-operating-hours">Operating Hours</div>
              <div className="heading-power-generated">Power Generated</div>
              <div className="heading-cost">Cost</div>
            </div>
            <div className="table-body-row" id="row-2">
              <div className="values-energy-source-row">Solar</div>
              <div className="values-operating-hours-value-row">426 hrs</div>
              <div className="values-power-generated-row">46743 kWh</div>
              <div className="values-cost-row">10,000</div>
            </div>
            <div className="table-body-row" id="row-3">
              <div className="values-energy-source-row">Wind</div>
              <div className="values-operating-hours-value-row">426 hrs</div>
              <div className="values-power-generated-row">46743 kWh</div>
              <div className="values-cost-row">10,000</div>
            </div>
            <div className="table-body-row" id="row-4">
              <div className="values-energy-source-row">Biogas</div>
              <div className="values-operating-hours-value-row">426 hrs</div>
              <div className="values-power-generated-row">46743 kWh</div>
              <div className="values-cost-row">10,000</div>
            </div>
            <div className="table-body-row" id="row-5">
              <div className="values-energy-source-row">ESS</div>
              <div className="values-operating-hours-value-row">426 hrs</div>
              <div className="values-power-generated-row">46743 kWh</div>
              <div className="values-cost-row">10,000</div>
            </div>
            <div className="table-body-row" id="row-6">
              <div className="values-energy-source-row">Gensets</div>
              <div className="values-operating-hours-value-row">426 hrs</div>
              <div className="values-power-generated-row">46743 kWh</div>
              <div className="values-cost-row">10,000</div>
            </div>
            <div className="table-body-row" id="row-7">
              <div className="values-energy-source-row">Mains</div>
              <div className="values-operating-hours-value-row">426 hrs</div>
              <div className="values-power-generated-row">46743 kWh</div>
              <div className="values-cost-row">10,000</div>
            </div>
          </div>
        </div>
      </div>
      <div className="overview-section-right-section">
        <div className="overview-right-row" id="row1">
          <div className="bar-chart">bar chart</div>
          <div className="total-energy-card">total energy</div>
        </div>
        <div className="overview-right-row" id="row2">
          <div className="vertical-cards">
            <div className="vertical-card-1">
              <div className="total-operating-hours-title">Total Operating Hours</div>
              <div className="total-operating-hours-value">2467 Hours</div>
            </div>
            <div className="vertical-card-2">
              <div className="mains">Mains</div>
              <div className="operated-yesterday">Operated Yesterday</div>
              <div className="hours">12 Hrs</div>
            </div>
            <div className="vertical-card-3">
              <div className="mains">Genset</div>
              <div className="operated-yesterday">Operated Yesterday</div>
              <div className="hours">7 Hrs</div>
            </div>
          </div>
          <div className="horizontal-cards-pie-chart">
            <div className="horizontal-cards">
              <div className="horizontal-card" id="card-1">
                <div className="energy-stored-title">Energy <br /> Stored (ESS)</div>
                <div className="energy-stored-value">83%</div>
                <div className="soc-ess-title">SOC (ESS)</div>
                <div className="soc-ess-value">80%</div>
              </div>
              <div className="horizontal-card" id="card-2">
                <div className="alerts-title">Alerts</div>
                <div className="alerts-value">2</div>
                <div className="shutdowns-title">Shutdowns</div>
                <div className="shutdowns-value">3</div>
              </div>
              <div className="horizontal-card" id="card-3">
                <div className="savings-title">Savings</div>
                <div className="savings-value-per-month">40,000</div>
                <div className="savings-title-per-month">(per month)</div>
                <div className="savings-value-till-date">INR 2,50,000</div>
                <div className="savings-title-till-date">(till date)</div>
              </div>
            </div>
            <div className="pie-chart"></div>
          </div>
        </div>
        <div className="overview-right-row" id="row3">
          <div className="power-table">
            <div className="power-heading">Power</div>
            <div className="avg-power-kW">
              <div className="avg-power-kW-title">Avg. Power (kW)</div>
              <div className="avg-power-kW-value">5928kW</div>
            </div>
            <div className="avg-power-kVA">
              <div className="avg-power-kVA-title">Avg. Power (kVA)</div>
              <div className="avg-power-kVA-value">5948kVA</div>
            </div>
          </div>
          <div className="current-table">
            <div className="current-heading">
              <div className="avg-current-title">Avg current <br />(Amp.)</div>
              <div className="avg-current-value">1010A</div>
            </div>
            <div className="avg-voltage-l-l">
              <div className="avg-voltage-l-l-title">Avg. Voltage (L-L) <br />(Volts)</div>
              <div className="avg-voltage-l-l-value">410V</div>
            </div>
            <div className="avg-voltage-l-n">
              <div className="avg-voltage-l-n-title">Avg. Voltage (L-N) <br />(Volts)</div>
              <div className="avg-voltage-l-n-value">200V</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
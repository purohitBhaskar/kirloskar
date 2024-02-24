import React from 'react'
import "../styles/Overview.css"

const Overview = () => {
  return (
    <div className="overview-section">
      <div className="sections" id="left-section">
        <div className="left-content" id="top-left">
          <img src="" alt="" />
        </div>
        <div className="left-content" id="bottom-left">
          <div className="bottom-left-row-heading" id='energy-heading'>
            Energy Resources
          </div>
          <div className="bottom-left-row" id='energy-source'>
            <div>Energy Source</div>
            <div>Operating Hours</div>
            <div>Power Generated</div>
            <div>Cost</div>
          </div>
          <div className="bottom-left-row" id='solar-left'>
            <div>Solar</div>
            <div>426 hrs</div>
            <div>46743 kWh</div>
            <div>10,000</div>
          </div>
          <div className="bottom-left-row" id='wind-left'>
            <div>Wind</div>
            <div>426 hrs</div>
            <div>46743 kWh</div>
            <div>10,000</div>
          </div>
          <div className="bottom-left-row" id='biogas-left'>
            <div>Biogas</div>
            <div>426 hrs</div>
            <div>46743 kWh</div>
            <div>10,000</div>
          </div>
          <div className="bottom-left-row" id='ESS-left'>
            <div>ESS</div>
            <div>426 hrs</div>
            <div>46743 kWh</div>
            <div>10,000</div>
          </div>
          <div className="bottom-left-row" id='gensets-left'>
            <div>Gensets</div>
            <div>426 hrs</div>
            <div>46743 kWh</div>
            <div>10,000</div>
          </div>
          <div className="bottom-left-row" id='mains-left'>
            <div>Mains</div>
            <div>426 hrs</div>
            <div>46743 kWh</div>
            <div>10,000</div>
          </div>
        </div>
      </div>
      <div className="sections" id="right-section">
        <div className="right-content" id="row1">
          <div className="row1-cards" id="bar-graph"></div>
          <div className="row1-cards" id="total-energy-card"></div>
        </div>
        <div className="right-content" id="row2">
          <div className="cards-vertical">
            <div className="card-vertical" id="operating-hours"></div>
            <div className="card-vertical" id="mains"></div>
            <div className="card-vertical" id="gensets"></div>
          </div>
          <div className="cards-horizontal">
            <div className="top-cards">
              <div className="energy-SOC"></div>
              <div className="alerts"></div>
              <div className="savings"></div>
            </div>
            <div className="pie-chart"></div>
          </div>
        </div>
        <div className="right-content" id="row3">
          <div className="power-table">
            <div className="power-table-row" id="power-heading"></div>
            <div className="power-table-row" id="avg-power-kWh"></div>
            <div className="power-table-row" id="avg-power-kVA"></div>
          </div>
          <div className="avg-current">
            <div className="avg-current-row" id="avg-current-heading"></div>
            <div className="avg-current-row" id="avg-voltage-l-l"></div>
            <div className="avg-current-row" id="avg-voltage-l-n"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
import React from 'react'
import "../styles/Gensets.css"

const Gensets = () => {
  return (
    <div className="gensets-container">
      <div className="sections" id="left-section">
        <div className="gensets-img-section"></div>
        <div className="gensets-meters-cards-section">
          <div className="stats-cards">
            <div className="card1">1</div>
            <div className="card2">1</div>
            <div className="card3">1</div>
            <div className="card4">1</div>
            <div className="card5">1</div>
            <div className="card6">1</div>
            <div className="card7">1</div>
            <div className="card8">1</div>
            <div className="card9">1</div>
          </div>
          <div className="meter-tables">
            <div className="energy-consumption-table"></div>
            <div className="soc-meter-table"></div>
          </div>
        </div>
      </div>
      <div className="sections" id="right-section">
        <div className="right-row" id="row1">
          <div className="titles-row-1">
            <div className="operating-hours-title">&nbsp;Operating &nbsp;&nbsp;&nbsp;Hours</div>
            <div className="total-generation-title">&nbsp;&nbsp;&nbsp;Total Generation</div>
            <div className="total-consumption-title">&nbsp;&nbsp;&nbsp;&nbsp;Total Consumption</div>
            <div className="total-cost-title">Total Cost</div>
          </div>
          <div className="values-row-1">
            <div className="operating-hours-value">426 hrs</div>
            <div className="total-generation-value">4673 kWh</div>
            <div className="total-consumption-value">3387 kWh</div>
            <div className="total-cost-value">Rs.10,000</div>
          </div>
        </div>
        <div className="right-row" id="row2">
        </div>
        <div className="right-row" id="row3">
          <div className="power-phase-headings">
            <div className="power-heading">Power</div>
            <div className="phase1-heading">Phase 1</div>
            <div className="phase2-heading">Phase 2</div>
            <div className="phase3-heading">Phase 3</div>
          </div>
          <div className="kW-phase-values">
            <div className="power-value">kW</div>
            <div className="phase1-value">120</div>
            <div className="phase2-value">240</div>
            <div className="phase3-value">400</div>
          </div>
          <div className="kVA-phase-values">
            <div className="power-value">kW</div>
            <div className="phase1-value">120</div>
            <div className="phase2-value">240</div>
            <div className="phase3-value">400</div>
          </div>
        </div>
        <div className="right-row" id="row4">1</div>
        <div className="right-row" id="row5">1</div>
      </div>

    </div>
  )
}

export default Gensets


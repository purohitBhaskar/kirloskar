import React from 'react'
import "../styles/Biogas.css"
const Biogas = () => {
  return (
    <div className="biogas-container">
      <div className="biogas-left-section">
        <div className="biogas-left-section-rows" id='biogas-img'></div>
        <div className="biogas-left-section-rows" id='biogas-vertical-card'>
          <div className="biogas-vertical-card1">1</div>
          <div className="biogas-vertical-card2">1</div>
          <div className="biogas-vertical-card3">1</div>
          <div className="biogas-vertical-card4">1</div>
        </div>
        <div className="left-section-rows" id='notifications'></div>
      </div>
      <div className="biogas-right-section">
        <div className="biogas-right-row1">
          <div className="biogas-bar-graph"></div>
          <div className="biogas-yesterday-stats"></div>
        </div>
        <div className="biogas-right-row2">
          <div className="biogas-power-heading"></div>
          <div className="biogas-kW"></div>
          <div className="biogas-kVA"></div>
        </div>
        <div className="biogas-right-row3">
          <div className="biogas-operating-hours"></div>
          <div className="biogas-total-generation"></div>
          <div className="biogas-total-utilization"></div>
          <div className="biogas-total-savings"></div>
        </div>
        <div className="biogas-right-row4">
          <div className="current-voltage-heading"></div>
          <div className="current-voltage-row1"></div>
          <div className="current-voltage-row2"></div>
          <div className="current-voltage-row3"></div>
        </div>
      </div>
    </div>
  )
}

export default Biogas
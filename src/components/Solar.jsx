import React from 'react'
import "../styles/Solar.css"

const Solar = () => {
  return (
    <div className="solar-container">
      <div className="solar-left-section">
        <div className="solar-left-section-rows" id='solar-img'></div>
        <div className="solar-left-section-rows" id='solar-vertical-card'>
          <div className="solar-vertical-card1">1</div>
          <div className="solar-vertical-card2">1</div>
          <div className="solar-vertical-card3">1</div>
          <div className="solar-vertical-card4">1</div>
        </div>
        <div className="left-section-rows" id='notifications'></div>
      </div>
      <div className="solar-right-section">
        <div className="solar-right-row1">
          <div className="solar-bar-graph"></div>
          <div className="solar-yesterday-stats"></div>
        </div>
        <div className="solar-right-row2">
          <div className="solar-power-heading"></div>
          <div className="solar-kW"></div>
          <div className="solar-kVA"></div>
        </div>
        <div className="solar-right-row3">
          <div className="solar-operating-hours"></div>
          <div className="solar-total-generation"></div>
          <div className="solar-total-utilization"></div>
          <div className="solar-total-savings"></div>
        </div>
        <div className="solar-right-row4">
          <div className="current-voltage-heading"></div>
          <div className="current-voltage-row1"></div>
          <div className="current-voltage-row2"></div>
          <div className="current-voltage-row3"></div>
        </div>
      </div>
    </div>
  )
}

export default Solar
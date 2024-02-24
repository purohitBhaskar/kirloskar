import React from 'react'
import "../styles/Wind.css"
const Wind = () => {
  return (
    <div className="wind-container">
      <div className="wind-left-section">
        <div className="wind-left-section-rows" id='wind-img'></div>
        <div className="wind-left-section-rows" id='wind-vertical-card'>
          <div className="wind-vertical-card1">1</div>
          <div className="wind-vertical-card2">1</div>
          <div className="wind-vertical-card3">1</div>
          <div className="wind-vertical-card4">1</div>
        </div>
        <div className="left-section-rows" id='notifications'></div>
      </div>
      <div className="wind-right-section">
        <div className="wind-right-row1">
          <div className="wind-bar-graph"></div>
          <div className="wind-yesterday-stats"></div>
        </div>
        <div className="wind-right-row2">
          <div className="wind-power-heading"></div>
          <div className="wind-kW"></div>
          <div className="wind-kVA"></div>
        </div>
        <div className="wind-right-row3">
          <div className="wind-operating-hours"></div>
          <div className="wind-total-generation"></div>
          <div className="wind-total-utilization"></div>
          <div className="wind-total-savings"></div>
        </div>
        <div className="wind-right-row4">
          <div className="current-voltage-heading"></div>
          <div className="current-voltage-row1"></div>
          <div className="current-voltage-row2"></div>
          <div className="current-voltage-row3"></div>
        </div>
      </div>
    </div>
  )
}

export default Wind
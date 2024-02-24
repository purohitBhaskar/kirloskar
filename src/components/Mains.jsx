import React from 'react'
import "../styles/Mains.css"
const Mains = () => {
  return (
    <div className="mains-container">
      <div className="mains-left-section">
        <div className="mains-left-section-rows" id='mains-img'></div>
        <div className="mains-left-section-rows" id='mains-vertical-card'>
          <div className="mains-vertical-card1">1</div>
          <div className="mains-vertical-card2">1</div>
          <div className="mains-vertical-card3">1</div>
          <div className="mains-vertical-card4">1</div>
        </div>
        <div className="left-section-rows" id='notifications'></div>
      </div>
      <div className="mains-right-section">
        <div className="mains-right-row1">
          <div className="mains-bar-graph"></div>
          <div className="mains-yesterday-stats"></div>
        </div>
        <div className="mains-right-row2">
          <div className="mains-power-heading"></div>
          <div className="mains-kW"></div>
          <div className="mains-kVA"></div>
        </div>
        <div className="mains-right-row3">
          <div className="mains-operating-hours"></div>
          <div className="mains-total-generation"></div>
          <div className="mains-total-utilization"></div>
          <div className="mains-total-savings"></div>
        </div>
        <div className="mains-right-row4">
          <div className="current-voltage-heading"></div>
          <div className="current-voltage-row1"></div>
          <div className="current-voltage-row2"></div>
          <div className="current-voltage-row3"></div>
        </div>
      </div>
    </div>
  )
}

export default Mains
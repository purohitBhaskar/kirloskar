import React from 'react'
import "../styles/Gensets.css"

const Gensets = () => {
  return (
    <div className="gensets-container">
      <div className="gensets-left-section">
        <div className="gensets-top-left"></div>
        <div className="gensets-bottom-left">
          <div className="gensets-stat-cards">
            <div className="gensets-stat-card" id="gensets-stat-card-1">1</div>
            <div className="gensets-stat-card" id="gensets-stat-card-2">1</div>
            <div className="gensets-stat-card" id="gensets-stat-card-3">1</div>
            <div className="gensets-stat-card" id="gensets-stat-card-4">1</div>
            <div className="gensets-stat-card" id="gensets-stat-card-5">1</div>
            <div className="gensets-stat-card" id="gensets-stat-card-6">1</div>
            <div className="gensets-stat-card" id="gensets-stat-card-7">1</div>
            <div className="gensets-stat-card" id="gensets-stat-card-8">1</div>
            <div className="gensets-stat-card" id="gensets-stat-card-9">1</div>
          </div>
          <div className="gensets-energy-meters">
            <div className="gensets-energy-consumption-meter"></div>
            <div className="gensets-soc-meter"></div>
          </div>
        </div>
      </div>

      <div className="gensets-right-section">
        <div className="gensets-right-row1">1</div>
        <div className="gensets-right-row2">1</div>
        <div className="gensets-right-row3">
          <div className="gensets-right-row-power-phase"></div>
          <div className="gensets-right-row-kW"></div>
          <div className="gensets-right-row-kVA"></div>

        </div>
        <div className="gensets-right-row4">
          <div className="gensets-voltage-current-phase-heading"></div>
          <div className="gensets-l1-phase"></div>
          <div className="gensets-l2-phase"></div>
          <div className="gensets-l3-phase"></div>
        </div>
        <div className="gensets-right-row5">
          <div className="gensets-notification-heading">Notifications</div>
          <div className="gensets-notification-table">
            <div className="gensets-notification-table-heading"></div>
            <div className="gensets-notification-table-row-1"></div>
            <div className="gensets-notification-table-row-2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gensets
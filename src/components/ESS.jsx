import React from 'react'
import "../styles/ESS.css"

const ESS = () => {
  return (
    <div className="ess-container">
      <div className="ess-left-section">
        <div className="ess-top-left"></div>
        <div className="ess-bottom-left">
          <div className="ess-stat-cards">
            <div className="ess-stat-card" id="ess-stat-card-1">1</div>
            <div className="ess-stat-card" id="ess-stat-card-2">1</div>
            <div className="ess-stat-card" id="ess-stat-card-3">1</div>
            <div className="ess-stat-card" id="ess-stat-card-4">1</div>
            <div className="ess-stat-card" id="ess-stat-card-5">1</div>
            <div className="ess-stat-card" id="ess-stat-card-6">1</div>
            <div className="ess-stat-card" id="ess-stat-card-7">1</div>
            <div className="ess-stat-card" id="ess-stat-card-8">1</div>
            <div className="ess-stat-card" id="ess-stat-card-9">1</div>
          </div>
          <div className="ess-energy-meters">
            <div className="ess-energy-consumption-meter"></div>
            <div className="ess-soc-meter"></div>
          </div>
        </div>
      </div>

      <div className="ess-right-section">
        <div className="ess-right-row1">1</div>
        <div className="ess-right-row2">1</div>
        <div className="ess-right-row3">1</div>
        <div className="ess-right-row4">1</div>
      </div>
    </div>
  )
}

export default ESS
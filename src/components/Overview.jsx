import React from 'react'
import "../styles/Overview.css"

const Overview = () => {
  return (
    <div className="overview-section">
      <div id="left-section" className="sections">
        <div className="left-content" id="top-left">
          image
        </div>
        <div className="left-content" id="bottom-left"></div>
      </div>
      <div id="right-section" className="sections">
        <div className="right-content" id="row1">
          <div className="row1-cards" id="bar-graph"></div>
          <div className="row1-cards" id="total-energy-card"></div>
        </div>
        <div className="right-content" id="row2">
          <div className="cards-vertical">
            <div className="operating-hours"></div>
            <div className="mains"></div>
            <div className="gensets"></div>
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
          <div className="power-table"></div>
          <div className="avg-current"></div>
        </div>
      </div>
    </div>
  )
}

export default Overview
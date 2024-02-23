import React from 'react'
import './Solar.css'
const Solar = () => {
  return (
    <div className="solar">
    <div className="section" id="left-seciton">
        <div className="top-left" id="image-section"></div>
        <div className="bottom-left">
            <div className="bottom-left-content" id="cards">
                <div className="card" id="maintenance-dates"></div>
                <div className="card" id="utilization-factor"></div>
                <div className="card" id="notifications-alerts"></div>
                <div className="card" id="frequency"></div>
            </div>
            <div className="bottom-left-content" id="notifications"></div>
        </div>
    </div>
    <div className="section" id="right-section">
        <div className="rows" id="top-card">
            <div className="part" id="pie-chart"></div>
            <div className="part" id="yesterday"></div>
        </div>
        <div className="rows" id="power-table"></div>
        <div className="rows" id="stats-cards">
            <div className="kwh-saving" id="card1">1</div>
            <div className="kwh-saving" id="card2">1</div>
            <div className="kwh-saving" id="card3">1</div>
            <div className="kwh-saving" id="card4">1</div>
        </div>
        <div className="rows" id="voltage-current"></div>
    </div>
</div>
  )
}

export default Solar
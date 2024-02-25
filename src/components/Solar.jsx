import React from 'react'
import "../styles/Solar.css"

const Solar = () => {
  return (
    <div className="solar-container">
      <div className="solar-left-section">
        <div className="solar-left-section-rows" id='solar-img'></div>
        <div className="solar-left-section-rows" id='solar-vertical-card'>
          <div className="solar-vertical-card1">
            <div className="solar-vertical-card1-maintenance">Maintenace</div>
            <div className="solar-vertical-card1-last-date">Last Date: <br /></div>
            <div className="solar-vertical-card1-next-due">Due Date: <br /></div>

          </div>
          <div className="solar-vertical-card2">
            <div className="solar-vertical-card2-utilization-factor">Utilisation<br />factor</div>
            <div className="solar-vertical-card2-utilization-factor-value">83%</div>
            <div className="solar-vertical-card2-power-factor">Power Factor</div>
            <div className="solar-vertical-card2-power-factor-value">0.6</div>
          </div>
          <div className="solar-vertical-card3">
            <div className="solar-vertical-card3-notifications">Notifications</div>
            <div className="solar-vertical-card3-alerts">Alerts: <br /></div>
            <div className="solar-vertical-card3-shutdowns">Shutdowns: <br /></div>
          </div>
          <div className="solar-vertical-card4">
            <div className="solar-vertical-card4-frequency">frequency</div>
            <div className="solar-vertical-card4-frequency-value">50 Hz</div>
            <div className="solar-vertical-card4-breaker-status">Breaker Status</div>
            <div className="solar-vertical-card4-breaker-status-on-off-trip">On/Off/Trip</div>
          </div>
        </div>
        <div className="left-section-rows" id='notifications'>
          <div className="solar-notifications-heading">Notifications</div>
          <div className="solar-notifications-row-1">
            <div className="fault-code">Fault code</div>
            <div className="description">Description</div>
            <div className="severity">Severity</div>
            <div className="status">Status</div>
            <div className="date-time">Date & Time</div>
          </div>
          <div className="solar-notifications-row-2">
            <div className="fault-code-value">1234</div>
            <div className="description-value">Blockage Detected</div>
            <div className="severity-value">Shutdown</div>
            <div className="status-value">Open</div>
            <div className="date-time-value">21/12/23-10:23 AM</div>
          </div>
          <div className="solar-notifications-row-3">
            <div className="fault-code-value">1234</div>
            <div className="description-value">Blockage Detected</div>
            <div className="severity-value">Shutdown</div>
            <div className="status-value">Open</div>
            <div className="date-time-value">21/12/23-10:23 AM</div>
          </div>
        </div>
      </div>
      <div className="solar-right-section">
        <div className="solar-right-row1">
          <div className="solar-bar-graph"></div>
          <div className="solar-yesterday-stats">
            <div className="solar-yesterday-stats-heading">Yesterday</div>
            <div className="solar-yesterday-hours-operated">Hours <br />Operated</div>
            <div className="solar-yesterday-power-generated">
              Power <br />Generated <br />(kWh)
            </div>
            {/* <div className="solar-yesterday-hours-operated-reading">4</div> */}
            {/* <div className="solar-yesterday-power-generated-reading">24</div> */}
          </div>
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
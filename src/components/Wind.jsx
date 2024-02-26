import React from 'react'
import "../styles/Wind.css"

const Wind = () => {
  return (
    <div className="wind-container">
      <div className="wind-left-section">
        <div className="wind-left-section-rows" id='wind-img'>
          <div className="capacity-status-strip">
            <div className="capacity-status-strip-total-capacity">Total Capacity - 550kWh</div>
            <div className="capacity-status-strip-status">Status - Active</div>
          </div>
        </div>
        <div className="wind-left-section-rows" id='wind-vertical-card'>
          <div className="wind-vertical-card1">
            <div className="wind-vertical-card1-maintenance">Maintenace</div>
            <div className="wind-vertical-card1-last-date">Last Date: <br /></div>
            <div className="wind-vertical-card1-next-due">Due Date: <br /></div>

          </div>
          <div className="wind-vertical-card2">
            <div className="wind-vertical-card2-utilization-factor">Utilisation<br />factor</div>
            <div className="wind-vertical-card2-utilization-factor-value">83%</div>
            <div className="wind-vertical-card2-power-factor">Power Factor</div>
            <div className="wind-vertical-card2-power-factor-value">0.6</div>
          </div>
          <div className="wind-vertical-card3">
            <div className="wind-vertical-card3-notifications">Notifications</div>
            <div className="wind-vertical-card3-alerts">Alerts: <br /></div>
            <div className="wind-vertical-card3-shutdowns">Shutdowns: <br /></div>
          </div>
          <div className="wind-vertical-card4">
            <div className="wind-vertical-card4-frequency">frequency</div>
            <div className="wind-vertical-card4-frequency-value">50 Hz</div>
            <div className="wind-vertical-card4-breaker-status">Breaker Status</div>
            <div className="wind-vertical-card4-breaker-status-on-off-trip">On/Off/Trip</div>
          </div>
        </div>
        <div className="left-section-rows" id='notifications'>
          <div className="wind-notifications-heading">Notifications</div>
          <div className="wind-notifications-row-1">
            <div className="fault-code">Fault code</div>
            <div className="description">Description</div>
            <div className="severity">Severity</div>
            <div className="status">Status</div>
            <div className="date-time">Date & Time</div>
          </div>
          <div className="wind-notifications-row-2">
            <div className="fault-code-value">1234</div>
            <div className="description-value">Blockage Detected</div>
            <div className="severity-value">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
                <ellipse cx="4.85035" cy="4.43272" rx="4.41456" ry="3.95812" fill="#F12D2D" />
              </svg> Shutdown
            </div>
            <div className="status-value">Open</div>
            <div className="date-time-value">21/12/23-10:23 AM</div>
          </div>
          <div className="wind-notifications-row-3">
            <div className="fault-code-value">1234</div>
            <div className="description-value">Blockage Detected</div>
            <div className="severity-value"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
              <ellipse cx="4.83253" cy="4.6256" rx="4.41456" ry="3.95812" fill="#F4DC0B" />
            </svg> Alert</div>
            <div className="status-value"> &nbsp; &nbsp; &nbsp; &nbsp;  Closed</div>
            <div className="date-time-value">21/12/23-10:23 AM</div>
          </div>
        </div>
      </div>
      <div className="wind-right-section">
        <div className="wind-right-row1">
          <div className="wind-bar-graph"></div>
          <div className="wind-yesterday-stats">
            <div className="wind-yesterday-stats-heading">Yesterday</div>
            <div className="wind-yesterday-hours-operated">Hours <br />Operated</div>
            <div className="wind-yesterday-power-generated">
              Power <br />Generated <br />(kWh)
            </div>
            {/* <div className="wind-yesterday-hours-operated-reading">4</div> */}
            {/* <div className="wind-yesterday-power-generated-reading">24</div> */}
          </div>
        </div>
        <div className="wind-right-row2">
          <div className="wind-power-heading"></div>
          <div className="wind-kW"></div>
          <div className="wind-kVA"></div>
        </div>
        <div className="wind-right-row3">
          <div className="wind-operating-hours">
            <div className="wind-operating-hours-heading">Operating <br />Hours</div>
            <div className="wind-operating-hours-reading">426 hrs</div>
          </div>
          <div className="wind-total-generation">
            <div className="wind-total-generation-heading">Total <br />Generation</div>
            <div className="wind-total-generation-reading">473 kWh</div>
          </div>
          <div className="wind-total-utilization">
            <div className="wind-total-utilization-heading">Total <br />Utilization</div>
            <div className="wind-total-utilization-reading">387 kWh</div>
          </div>
          <div className="wind-total-savings">
            <div className="wind-total-savings-heading">Total <br />Savings</div>
            <div className="wind-total-savings-reading">Rs.10,000</div>
          </div>
        </div>
        <div className="wind-right-row4">
          <div className="current-voltage-heading">
            <div className="spark-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="37" height="35" viewBox="0 0 37 35" fill="none">
                <path d="M17.6842 20.3699V19.8699H17.1842H12.4087L19.1197 7.72614V15.2232V15.7232H19.6197H24.1573L17.6842 27.8124V20.3699ZM0.904297 17.7965C0.904297 8.64 8.66494 1.17532 18.2766 1.17532C27.8883 1.17532 35.649 8.64 35.649 17.7965C35.649 26.9531 27.8883 34.4177 18.2766 34.4177C8.66494 34.4177 0.904297 26.9531 0.904297 17.7965ZM3.48593 17.7965C3.48593 25.6411 10.1414 31.9866 18.2766 31.9866C26.4119 31.9866 33.0673 25.6411 33.0673 17.7965C33.0673 9.95195 26.4119 3.60643 18.2766 3.60643C10.1414 3.60643 3.48593 9.95195 3.48593 17.7965Z" fill="white" stroke="#272728" />
              </svg>
            </div>
            <div className="L-L-V">
              Voltage <br />(L-L)(V)

            </div>
            <div className="L-N-V">
              Voltage <br />(L-L)(V)

            </div>
            <div className="current-amp">
              Current <br />(Amp)

            </div>
          </div>
          <div className="current-voltage-row1">
            <div className="l-phase">L1 Phase</div>
            <div className="voltage-1">410</div>
            <div className="voltage-2">230</div>
            <div className="current">400</div>
          </div>
          <div className="current-voltage-row2">
            <div className="l-phase">L1 Phase</div>
            <div className="voltage-1">410</div>
            <div className="voltage-2">230</div>
            <div className="current">400</div>
          </div>
          <div className="current-voltage-row3">
            <div className="l-phase">L1 Phase</div>
            <div className="voltage-1">410</div>
            <div className="voltage-2">230</div>
            <div className="current">400</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wind
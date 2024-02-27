// import React from 'react'
// import "../styles/Solar.css"

// const Solar = () => {
//   return (
//     <div className="solar-container">
//       <div className="solar-left-section">
//         <div className="solar-left-section-rows" id='solar-img'>
//           <div className="capacity-status-strip">
//             <div className="capacity-status-strip-total-capacity">Total Capacity - 550kWh</div>
//             <div className="capacity-status-strip-status">Status - Active</div>
//           </div>
//         </div>
//         <div className="solar-left-section-rows" id='solar-vertical-card'>
//           <div className="solar-vertical-card1">
//             <div className="solar-vertical-card1-maintenance">Maintenace</div>
//             <div className="solar-vertical-card1-last-date">Last Date: <br /></div>
//             <div className="solar-vertical-card1-next-due">Due Date: <br /></div>

//           </div>
//           <div className="solar-vertical-card2">
//             <div className="solar-vertical-card2-utilization-factor">Utilisation<br />factor</div>
//             <div className="solar-vertical-card2-utilization-factor-value">83%</div>
//             <div className="solar-vertical-card2-power-factor">Power Factor</div>
//             <div className="solar-vertical-card2-power-factor-value">0.6</div>
//           </div>
//           <div className="solar-vertical-card3">
//             <div className="solar-vertical-card3-notifications">Notifications</div>
//             <div className="solar-vertical-card3-alerts">Alerts: <br /></div>
//             <div className="solar-vertical-card3-shutdowns">Shutdowns: <br /></div>
//           </div>
//           <div className="solar-vertical-card4">
//             <div className="solar-vertical-card4-frequency">frequency</div>
//             <div className="solar-vertical-card4-frequency-value">50 Hz</div>
//             <div className="solar-vertical-card4-breaker-status">Breaker Status</div>
//             <div className="solar-vertical-card4-breaker-status-on-off-trip">On/Off/Trip</div>
//           </div>
//         </div>
//         <div className="left-section-rows" id='notifications'>
//           <div className="solar-notifications-heading">Notifications</div>
//           <div className="solar-notifications-row-1">
//             <div className="fault-code">Fault code</div>
//             <div className="description">Description</div>
//             <div className="severity">Severity</div>
//             <div className="status">Status</div>
//             <div className="date-time">Date & Time</div>
//           </div>
//           <div className="solar-notifications-row-2">
//             <div className="fault-code-value">1234</div>
//             <div className="description-value">Blockage Detected</div>
//             <div className="severity-value">
//               <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
//                 <ellipse cx="4.85035" cy="4.43272" rx="4.41456" ry="3.95812" fill="#F12D2D" />
//               </svg> Shutdown
//             </div>
//             <div className="status-value">Open</div>
//             <div className="date-time-value">21/12/23-10:23 AM</div>
//           </div>
//           <div className="solar-notifications-row-3">
//             <div className="fault-code-value">1234</div>
//             <div className="description-value">Blockage Detected</div>
//             <div className="severity-value"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
//               <ellipse cx="4.83253" cy="4.6256" rx="4.41456" ry="3.95812" fill="#F4DC0B" />
//             </svg> Alert</div>
//             <div className="status-value"> &nbsp; &nbsp; &nbsp; &nbsp;  Closed</div>
//             <div className="date-time-value">21/12/23-10:23 AM</div>
//           </div>
//         </div>
//       </div>
//       <div className="solar-right-section">
//         <div className="solar-right-row1">
//           <div className="solar-bar-graph"></div>
//           <div className="solar-yesterday-stats">
//             <div className="solar-yesterday-stats-heading">Yesterday</div>
//             <div className="solar-yesterday-hours-operated">Hours <br />Operated</div>
//             <div className="solar-yesterday-power-generated">
//               Power <br />Generated <br />(kWh)
//             </div>
//             <div className="solar-yesterday-hours-operated-reading">4</div>
//             <div className="solar-yesterday-power-generated-reading">24</div>
//           </div>
//         </div>
//         <div className="solar-right-row2">
//           {/* <div className="solar-power-heading"></div>
//           <div className="solar-kW"></div>
//           <div className="solar-kVA"></div> */}
//           <div className="solar-right-row-power-phase">
//             <div className="power">Power</div>
//             <div className="phase-1">Phase 1</div>
//             <div className="phase-2">Phase 2</div>
//             <div className="phase-3">Phase 3</div>
//           </div>
//           <div className="solar-right-row-kW">
//             <div className="power-unit">kW</div>
//             <div className="phase-1-values">120</div>
//             <div className="phase-2-values">240</div>
//             <div className="phase-3-values">400</div>
//           </div>
//           <div className="solar-right-row-kVA">
//             <div className="power-unit">kVA</div>
//             <div className="phase-1-values">120</div>
//             <div className="phase-2-values">120</div>
//             <div className="phase-3-values">400</div>
//           </div>
//         </div>
//         <div className="solar-right-row3">
//           <div className="solar-operating-hours">
//             <div className="solar-operating-hours-heading">Operating <br />Hours</div>
//             <div className="solar-operating-hours-reading">426 hrs</div>
//           </div>
//           <div className="solar-total-generation">
//             <div className="solar-total-generation-heading">Total <br />Generation</div>
//             <div className="solar-total-generation-reading">473 kWh</div>
//           </div>
//           <div className="solar-total-utilization">
//             <div className="solar-total-utilization-heading">Total <br />Utilization</div>
//             <div className="solar-total-utilization-reading">387 kWh</div>
//           </div>
//           <div className="solar-total-savings">
//             <div className="solar-total-savings-heading">Total <br />Savings</div>
//             <div className="solar-total-savings-reading">Rs.10,000</div>
//           </div>
//         </div>
//         <div className="solar-right-row4">
//           <div className="current-voltage-heading">
//             <div className="spark-icon">
//               <svg xmlns="http://www.w3.org/2000/svg" width="37" height="35" viewBox="0 0 37 35" fill="none">
//                 <path d="M17.6842 20.3699V19.8699H17.1842H12.4087L19.1197 7.72614V15.2232V15.7232H19.6197H24.1573L17.6842 27.8124V20.3699ZM0.904297 17.7965C0.904297 8.64 8.66494 1.17532 18.2766 1.17532C27.8883 1.17532 35.649 8.64 35.649 17.7965C35.649 26.9531 27.8883 34.4177 18.2766 34.4177C8.66494 34.4177 0.904297 26.9531 0.904297 17.7965ZM3.48593 17.7965C3.48593 25.6411 10.1414 31.9866 18.2766 31.9866C26.4119 31.9866 33.0673 25.6411 33.0673 17.7965C33.0673 9.95195 26.4119 3.60643 18.2766 3.60643C10.1414 3.60643 3.48593 9.95195 3.48593 17.7965Z" fill="white" stroke="#272728" />
//               </svg>
//             </div>
//             <div className="L-L-V">
//               Voltage <br />(L-L)(V)

//             </div>
//             <div className="L-N-V">
//               Voltage <br />(L-L)(V)

//             </div>
//             <div className="current-amp">
//               Current <br />(Amp)

//             </div>
//           </div>
//           <div className="current-voltage-row1">
//             <div className="l-phase">L1 Phase</div>
//             <div className="voltage-1">410</div>
//             <div className="voltage-2">230</div>
//             <div className="current">400</div>
//           </div>
//           <div className="current-voltage-row2">
//             <div className="l-phase">L1 Phase</div>
//             <div className="voltage-1">410</div>
//             <div className="voltage-2">230</div>
//             <div className="current">400</div>
//           </div>
//           <div className="current-voltage-row3">
//             <div className="l-phase">L1 Phase</div>
//             <div className="voltage-1">410</div>
//             <div className="voltage-2">230</div>
//             <div className="current">400</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Solar



import React from 'react'
import "../styles/Solar.css"

const Solar = () => {
  return (
    <div className='solar-container'>
      <div className="solar-left-section">
        <div className="img-section" id="solar-img"></div>
        <div className="solar-cards-section">
          <div className="solar-card-section-card" id="card-1">
            <div className="maintenance-heading">Maintenance</div>
            <div className="maintenance-last-date">
              <div className="last-date-title">Last Date:</div>
              <div className="last-date-value">5 Dec' 23</div>
            </div>
            <div className="maintenance-next-due">
              <div className="next-due-date-title">Next Due:</div>
              <div className="next-due-date-value">5 Jan' 23</div>
            </div>
          </div>
          <div className="solar-card-section-card" id="card-2">
            <div className="utilization-factor-title">Utilization <br />factor</div>
            <div className="utilization-factor-value">83%</div>
            <div className="power-factor-title">Power Factor</div>
            <div className="power-factor-value">0.60</div>
          </div>
          <div className="solar-card-section-card" id="card-3">
            <div className="maintenance-heading">Notifications</div>
            <div className="maintenance-last-date">
              <div className="last-date-title">Alerts:</div>
              <div className="last-date-value">5</div>
            </div>
            <div className="maintenance-next-due">
              <div className="next-due-date-title">Shutdowns:</div>
              <div className="next-due-date-value">2</div>
            </div>
          </div>
          <div className="solar-card-section-card" id="card-4">
            <div className="utilization-factor-title">Frequency</div>
            <div className="utilization-factor-value">50 Hz</div>
            <div className="power-factor-title">Breaker Status</div>
            <div className="power-factor-value">On/Off/Trip</div>
          </div>
        </div>
        <div className="solar-notifications-section">
          <div className="solar-notifications-section-heading">Notifications</div>
          <div className="solar-notifications-section-table">
            <div className="solar-notifications-section-table-table-row1">
              <div className="fault-code">Fault Code</div>
              <div className="description">Description</div>
              <div className="severity">Severity</div>
              <div className="status">Status</div>
              <div className="date-time">Date & Time</div>
            </div>
            <div className="solar-notifications-section-table-table-row2">
              <div className="fault-code-value-1">1234</div>
              <div className="description-value-1">Blockage Detected</div>
              <div className="severity-value-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
                  <ellipse cx="4.85035" cy="4.43272" rx="4.41456" ry="3.95812" fill="#F12D2D" />
                </svg>
                Shutdown</div>
              <div className="status-value-1">Open</div>
              <div className="date-time-value-1">21/12/23-10:23 AM</div>
            </div>
            <div className="solar-notifications-section-table-table-row3">
              <div className="fault-code-value-2">1234</div>
              <div className="description-value-2">Blockage Detected</div>
              <div className="severity-value-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
                  <ellipse cx="4.83253" cy="4.6256" rx="4.41456" ry="3.95812" fill="#F4DC0B" />
                </svg>
                Alert</div>
              <div className="status-value-2">Closed</div>
              <div className="date-time-value-2">21/12/23-10:23 AM</div>
            </div>
          </div>
        </div>
      </div>
      <div className="solar-right-section">
        <div className="solar-right-section-row1">
          <div className="pie-chart">
            <img src="../assets/energy-bar-chart.png" alt="" />
          </div>
          <div className="yesterday-stats">
            <div className="yesterday-title">Yesterday</div>
            <div className="hours-value">
              <div className="hours-operated-title">Hours <br /> Operated</div>
              <div className="hours-operated-value">4</div>
            </div>
            <div className="power-value">
              <div className="power-generated-title">Power<br />Generated <br /> (kWh)</div>
              <div className="power-generated-value">24</div>
            </div>


          </div>
        </div>
        <div className="solar-right-section-row2">
          <div className="power-phase-table">
            <div className="power-phase-table-row1">
              <div className="power-phase-table-power-heading">Power</div>
              <div className="power-phase-table-phase1-heading">Phase 1</div>
              <div className="power-phase-table-phase2-heading">Phase 2</div>
              <div className="power-phase-table-phase3-heading">Phase 3</div>
            </div>
            <div className="power-phase-table-row2">
              <div className="power-phase-table-power-unit">kW</div>
              <div className="power-phase-table-phase1-value">120</div>
              <div className="power-phase-table-phase2-value">240</div>
              <div className="power-phase-table-phase3-value">400</div>
            </div>
            <div className="power-phase-table-row3">
              <div className="power-phase-table-power-unit">kVA</div>
              <div className="power-phase-table-phase1-value">120</div>
              <div className="power-phase-table-phase2-value">240</div>
              <div className="power-phase-table-phase3-value">400</div>
            </div>
          </div>
        </div>
        <div className="solar-right-section-row3">
          <div className="card1">
            <div className="operating-hours-title">Operating <br /> Hours</div>
            <div className="operating-hours-value">426 hrs</div>
          </div>
          <div className="card2">
            <div className="total-generation-title">Total <br /> Generation</div>
            <div className="total-generation-value">473 kWh</div>
          </div>
          <div className="card3">
            <div className="total-utilization-title">Total <br /> Utilization</div>
            <div className="total-utilization-value">387 kwH</div>
          </div>
          <div className="card4">
            <div className="total-savings-title">Total <br /> Savings</div>
            <div className="total-savings-value">Rs.10,000</div>
          </div>
        </div>
        <div className="solar-right-section-row4">
          <div className="table-heading-row">
            <div className="thunder">
              <svg xmlns="http://www.w3.org/2000/svg" width="37" height="35" viewBox="0 0 37 35" fill="none">
                <path d="M17.6842 20.3699V19.8699H17.1842H12.4087L19.1197 7.72614V15.2232V15.7232H19.6197H24.1573L17.6842 27.8124V20.3699ZM0.904297 17.7965C0.904297 8.64 8.66494 1.17532 18.2766 1.17532C27.8883 1.17532 35.649 8.64 35.649 17.7965C35.649 26.9531 27.8883 34.4177 18.2766 34.4177C8.66494 34.4177 0.904297 26.9531 0.904297 17.7965ZM3.48593 17.7965C3.48593 25.6411 10.1414 31.9866 18.2766 31.9866C26.4119 31.9866 33.0673 25.6411 33.0673 17.7965C33.0673 9.95195 26.4119 3.60643 18.2766 3.60643C10.1414 3.60643 3.48593 9.95195 3.48593 17.7965Z" fill="white" stroke="#272728" />
              </svg>
            </div>
            <div className="voltage-l-l">Voltage <br />(L-L)(V)</div>
            <div className="voltage-l-l">Voltage <br />(L-N)(V)</div>
            <div className="current">Current <br />(Amp)</div>
          </div>
          <div className="table-l1-phase-row">
            <div className="l1-phase-title">L1 Phase</div>
            <div className="l1-phase-voltage-l-l-reading">410</div>
            <div className="l1-phase-voltage-l-n-reading">230</div>
            <div className="l1-phase-current-reading">400</div>
          </div>
          <div className="table-l2-phase-row">
            <div className="l2-phase-title">L2 Phase</div>
            <div className="l3-phase-voltage-l-l-reading">410</div>
            <div className="l2-phase-voltage-l-n-reading">230</div>
            <div className="l2-phase-current-reading">400</div>
          </div>
          <div className="table-l3-phase-row">
            <div className="l3-phase-title">L3 Phase</div>
            <div className="l3-phase-voltage-l-l-reading">410</div>
            <div className="l3-phase-voltage-l-n-reading">230</div>
            <div className="l3-phase-current-reading">400</div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Solar
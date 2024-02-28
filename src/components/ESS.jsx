import React from 'react'
import "../styles/ESS.css"

const ESS = () => {
  return (
    <div className="ess-container">
      <div className="sections" id="left-section">
        <div className="ess-img-section"></div>
        <div className="ess-meters-cards-section">
          <div className="stats-cards">
            <div className="card1">
              <div className="temperature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="20" viewBox="0 0 25 25" fill="none">
                  <g clip-path="url(#clip0_864_4092)">
                    <path d="M20.3125 0C17.7295 0 15.625 2.10449 15.625 4.6875C15.625 7.27051 17.7295 9.375 20.3125 9.375C22.8955 9.375 25 7.27051 25 4.6875C25 2.10449 22.8955 0 20.3125 0ZM20.3125 6.25C19.4482 6.25 18.75 5.55176 18.75 4.6875C18.75 3.82324 19.4482 3.125 20.3125 3.125C21.1768 3.125 21.875 3.82324 21.875 4.6875C21.875 5.55176 21.1768 6.25 20.3125 6.25ZM12.5 5.46875C12.5 2.44629 10.0537 0 7.03125 0C4.00879 0 1.5625 2.44629 1.5625 5.46875V13.5986C0.600586 14.8047 0 16.3086 0 17.9688C0 21.8506 3.14941 25 7.03125 25C10.9131 25 14.0625 21.8506 14.0625 17.9688C14.0625 16.3086 13.4619 14.7998 12.5 13.5986V5.46875ZM7.03125 21.875C4.87793 21.875 3.125 20.1221 3.125 17.9688C3.125 16.7236 3.7207 15.5811 4.6875 14.8535V5.46875C4.6875 4.1748 5.7373 3.125 7.03125 3.125C8.3252 3.125 9.375 4.1748 9.375 5.46875V14.8535C10.3418 15.5762 10.9375 16.7236 10.9375 17.9688C10.9375 20.1221 9.18457 21.875 7.03125 21.875ZM7.8125 15.7666V14.8438C7.8125 14.4141 7.46094 14.0625 7.03125 14.0625C6.60156 14.0625 6.25 14.4141 6.25 14.8438V15.7666C5.3418 16.0889 4.6875 16.9482 4.6875 17.9688C4.6875 19.2627 5.7373 20.3125 7.03125 20.3125C8.3252 20.3125 9.375 19.2627 9.375 17.9688C9.375 16.9482 8.7207 16.0889 7.8125 15.7666Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_864_4092">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="coolant-percentage">70%</div>
              <div className="coolant-temp-text">Coolant Temperature</div>
            </div>
            <div className="card2">
              <div className="temperature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="23" viewBox="0 0 17 23" fill="none">
                  <path d="M14.5137 6.54488L8.5 0L2.48625 6.54488C0.82875 8.35196 0 10.7614 0 13.0782C0 15.3949 0.82875 17.8391 2.48625 19.6462C4.14375 21.4533 6.32188 22.3684 8.5 22.3684C10.6781 22.3684 12.8562 21.4533 14.5137 19.6462C16.1712 17.8391 17 15.3949 17 13.0782C17 10.7614 16.1712 8.35196 14.5137 6.54488ZM2.125 13.4952C2.13562 11.1784 2.78375 9.70727 3.995 8.3983L8.5 3.38249L13.005 8.45621C14.2162 9.75361 14.8644 11.1784 14.875 13.4952H2.125Z" fill="white" />
                </svg>
              </div>
              <div className="coolant-percentage">30</div>
              <div className="coolant-temp-text">Oil <br /> Pressure (PSI)</div>
            </div>
            <div className="card3">
              <div className="alerts-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 20 20" fill="none">
                  <path d="M10 4.2L16.8455 17.8947H3.15455L10 4.2ZM10 0L0 20H20L10 0ZM10.9091 14.7368H9.09091V16.8421H10.9091V14.7368ZM10.9091 8.42105H9.09091V12.6316H10.9091V8.42105Z" fill="white" />
                </svg>
              </div>
              <div className="total-value">6</div>
              <div className="alerts-text">Alerts</div>
              <div className="alerts-value">4</div>
              <div className="shutdowns-text">Shutdowns</div>
              <div className="shutdowns-value">2</div>
            </div>
            <div className="card4">
              <div className="temperature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="20" viewBox="0 0 25 25" fill="none">
                  <g clip-path="url(#clip0_864_4092)">
                    <path d="M20.3125 0C17.7295 0 15.625 2.10449 15.625 4.6875C15.625 7.27051 17.7295 9.375 20.3125 9.375C22.8955 9.375 25 7.27051 25 4.6875C25 2.10449 22.8955 0 20.3125 0ZM20.3125 6.25C19.4482 6.25 18.75 5.55176 18.75 4.6875C18.75 3.82324 19.4482 3.125 20.3125 3.125C21.1768 3.125 21.875 3.82324 21.875 4.6875C21.875 5.55176 21.1768 6.25 20.3125 6.25ZM12.5 5.46875C12.5 2.44629 10.0537 0 7.03125 0C4.00879 0 1.5625 2.44629 1.5625 5.46875V13.5986C0.600586 14.8047 0 16.3086 0 17.9688C0 21.8506 3.14941 25 7.03125 25C10.9131 25 14.0625 21.8506 14.0625 17.9688C14.0625 16.3086 13.4619 14.7998 12.5 13.5986V5.46875ZM7.03125 21.875C4.87793 21.875 3.125 20.1221 3.125 17.9688C3.125 16.7236 3.7207 15.5811 4.6875 14.8535V5.46875C4.6875 4.1748 5.7373 3.125 7.03125 3.125C8.3252 3.125 9.375 4.1748 9.375 5.46875V14.8535C10.3418 15.5762 10.9375 16.7236 10.9375 17.9688C10.9375 20.1221 9.18457 21.875 7.03125 21.875ZM7.8125 15.7666V14.8438C7.8125 14.4141 7.46094 14.0625 7.03125 14.0625C6.60156 14.0625 6.25 14.4141 6.25 14.8438V15.7666C5.3418 16.0889 4.6875 16.9482 4.6875 17.9688C4.6875 19.2627 5.7373 20.3125 7.03125 20.3125C8.3252 20.3125 9.375 19.2627 9.375 17.9688C9.375 16.9482 8.7207 16.0889 7.8125 15.7666Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_864_4092">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="coolant-percentage">50</div>
              <div className="coolant-temp-text">Frequency <br />(Hz)</div>
            </div>
            <div className="card5">
              <div className="temperature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                  <path d="M11.5 0C5.14718 0 0 4.80403 0 10.7333C0 16.6626 5.14718 21.4667 11.5 21.4667C17.8528 21.4667 23 16.6626 23 10.7333C23 4.80403 17.8528 0 11.5 0ZM14.1478 15.1522L10.0579 12.378C9.91411 12.2784 9.83065 12.1226 9.83065 11.9581V4.67419C9.83065 4.38855 10.081 4.15484 10.3871 4.15484H12.6129C12.919 4.15484 13.1694 4.38855 13.1694 4.67419V10.6338L16.1139 12.6333C16.3643 12.8021 16.4153 13.1267 16.2345 13.3604L14.9268 15.0396C14.746 15.269 14.3982 15.321 14.1478 15.1522Z" fill="white" />
                </svg>
              </div>
              <div className="coolant-percentage">4</div>
              <div className="coolant-temp-text">Hours Operated Yesterday</div>
            </div>
            <div className="card6">
              <div className="temperature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                  <path d="M11.5 0C5.1508 0 0 5.1508 0 11.5C0 17.8492 5.1508 23 11.5 23C17.8492 23 23 17.8492 23 11.5C23 5.1508 17.8492 0 11.5 0ZM11.5 20.6954C6.42986 20.6954 2.30461 16.5701 2.30461 11.5C2.30461 6.42986 6.42986 2.30461 11.5 2.30461C16.5701 2.30461 20.6954 6.42986 20.6954 11.5C20.6954 16.5701 16.5701 20.6954 11.5 20.6954ZM12.3642 3.43387L7.17886 13.2285H10.7971V19.5661L15.8211 9.77154H12.3642V3.43387Z" fill="white" />
                </svg>
              </div>
              <div className="coolant-percentage">24</div>
              <div className="coolant-temp-text">Power Generated Yesterday(kWh)</div>
            </div>
            <div className="card7">
              <div className="temperature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                  <path d="M21.25 2.5V5H22.5V7.5H21.25V10H2.5V2.5H21.25ZM21.875 0H1.875C0.839453 0 0 0.839453 0 1.875V10.625C0 11.6605 0.839453 12.5 1.875 12.5H21.875C22.9105 12.5 23.75 11.6605 23.75 10.625V10H24.0625C24.5803 10 25 9.58027 25 9.0625V3.4375C25 2.91973 24.5803 2.5 24.0625 2.5H23.75V1.875C23.75 0.839453 22.9105 0 21.875 0ZM12.5 3.75H3.75V8.75H12.5V3.75Z" fill="white" />
                </svg>
              </div>
              <div className="coolant-percentage">70%</div>
              <div className="coolant-temp-text">Battery Charged</div>
            </div>
            <div className="card8">
              <div className="utilization-factor-title">Utilization Factor</div>
              <div className="utilization-factor-value">22%</div>
            </div>
            <div className="card9">
              <div className="utilization-factor-title">Power Factor</div>
              <div className="utilization-factor-value">0.60</div>
            </div>
          </div>
          <div className="meter-tables">
            <div className="energy-consumption-table"></div>
            <div className="soc-meter-table"></div>
          </div>
        </div>
      </div>
      <div className="sections" id="right-section">
        <div className="right-row" id="row1">
          <div className="titles-row-1">
            <div className="operating-hours-title">&nbsp;Operating &nbsp;&nbsp;&nbsp;Hours</div>
            <div className="total-generation-title">&nbsp;&nbsp;&nbsp;Total Generation</div>
            <div className="total-consumption-title">&nbsp;&nbsp;&nbsp;&nbsp;Total Consumption</div>
            <div className="total-cost-title">Total Cost</div>
          </div>
          <div className="values-row-1">
            <div className="operating-hours-value">426 hrs</div>
            <div className="total-generation-value">4673 kWh</div>
            <div className="total-consumption-value">3387 kWh</div>
            <div className="total-cost-value">Rs.10,000</div>
          </div>
        </div>
        <div className="right-row" id="row2">
        </div>
        <div className="right-row" id="row3">
          <div className="power-phase-headings">
            <div className="power-heading">Power</div>
            <div className="phase1-heading">Phase 1</div>
            <div className="phase2-heading">Phase 2</div>
            <div className="phase3-heading">Phase 3</div>
          </div>
          <div className="kW-phase-values">
            <div className="power-value">kW</div>
            <div className="phase1-value">120</div>
            <div className="phase2-value">240</div>
            <div className="phase3-value">400</div>
          </div>
          <div className="kVA-phase-values">
            <div className="power-value">kW</div>
            <div className="phase1-value">120</div>
            <div className="phase2-value">240</div>
            <div className="phase3-value">400</div>
          </div>
        </div>
        <div className="right-row" id="row4">
          <div className="phase-power-voltage-headings">
            <div className="thunder-sign">
              <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                <path d="M14.6925 17.787V17.287H14.1925H10.3036L15.7366 7.02451V13.278V13.778H16.2366H19.9272L14.6925 23.9832V17.787ZM0.609375 15.5325C0.609375 7.52705 7.10395 1.03247 15.1094 1.03247C23.1148 1.03247 29.6094 7.52705 29.6094 15.5325C29.6094 23.5379 23.1148 30.0325 15.1094 30.0325C7.10395 30.0325 0.609375 23.5379 0.609375 15.5325ZM2.61539 15.5325C2.61539 22.4218 8.22001 28.0265 15.1094 28.0265C21.9987 28.0265 27.6034 22.4218 27.6034 15.5325C27.6034 8.6431 21.9987 3.03848 15.1094 3.03848C8.22001 3.03848 2.61539 8.6431 2.61539 15.5325Z" fill="white" stroke="#272728" />
              </svg>
            </div>
            <div className="v-l-l-heading">&nbsp;&nbsp;Voltage <br /> (L-L)(V)</div>
            <div className="v-l-n-heading">Voltage <br /> (L-N)(V)</div>
            <div className="current-heading">Current <br /> (Amp)</div>
          </div>
          <div className="phase-values-l1">
            <div className="1-phase">L1 Phase</div>
            <div className="v-l-l-value">410</div>
            <div className="v-l-n-value">230</div>
            <div className="current-value">400</div>
          </div>
          <div className="phase-values-l2">
            <div className="1-phase">L1 Phase</div>
            <div className="v-l-l-value">410</div>
            <div className="v-l-n-value">230</div>
            <div className="current-value">400</div>
          </div>
          <div className="phase-values-l3">
            <div className="1-phase">L1 Phase</div>
            <div className="v-l-l-value">410</div>
            <div className="v-l-n-value">230</div>
            <div className="current-value">400</div>
          </div>
        </div>
        <div className="right-row" id="row5">
          <div className="notification-heading">Notifications</div>
          <div className="notifications-heading-row">
            <div className="fault-code-title">Fault Code</div>
            <div className="description-title">Description</div>
            <div className="severity-title">Severity</div>
            <div className="status-title">Status</div>
            <div className="date-time-title">Date & Time</div>
          </div>
          <div className="notifications-data-row1">
            <div className="fault-code-data-row-1">1234</div>
            <div className="description-data-row-1">Blockage Detected</div>
            <div className="severity-data-row-1">Shutdown</div>
            <div className="status-data-row-1">Open</div>
            <div className="date-time-data-row-1">21/12/23-10:23 AM</div>
          </div>
          <div className="notifications-data-row2">
            <div className="fault-code-data-row-2">1234</div>
            <div className="description-data-row-2">Blockage Detected</div>
            <div className="severity-data-row-2">Alert</div>
            <div className="status-data-row-2">Closed</div>
            <div className="date-time-data-row-2">21/12/23-10:23 AM</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ESS


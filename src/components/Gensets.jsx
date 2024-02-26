import React from 'react'
import "../styles/Gensets.css"

const Gensets = () => {
  return (
    <div className="gensets-container">
      <div className="gensets-left-section">
        <div className="gensets-top-left">
          <div className="capacity-status-strip">
            <div className="capacity-status-strip-total-capacity">Total Capacity - 550kWh</div>
            <div className="capacity-status-strip-status">Status - Active</div>
          </div>
        </div>
        <div className="gensets-bottom-left">
          <div className="gensets-stat-cards">
            <div className="gensets-stat-card" id="gensets-stat-card-1">
              <div className="thermometer">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 25" fill="none">
                  <g clip-path="url(#clip0_864_3786)">
                    <path d="M20.3125 0C17.7295 0 15.625 2.10449 15.625 4.6875C15.625 7.27051 17.7295 9.375 20.3125 9.375C22.8955 9.375 25 7.27051 25 4.6875C25 2.10449 22.8955 0 20.3125 0ZM20.3125 6.25C19.4482 6.25 18.75 5.55176 18.75 4.6875C18.75 3.82324 19.4482 3.125 20.3125 3.125C21.1768 3.125 21.875 3.82324 21.875 4.6875C21.875 5.55176 21.1768 6.25 20.3125 6.25ZM12.5 5.46875C12.5 2.44629 10.0537 0 7.03125 0C4.00879 0 1.5625 2.44629 1.5625 5.46875V13.5986C0.600586 14.8047 0 16.3086 0 17.9688C0 21.8506 3.14941 25 7.03125 25C10.9131 25 14.0625 21.8506 14.0625 17.9688C14.0625 16.3086 13.4619 14.7998 12.5 13.5986V5.46875ZM7.03125 21.875C4.87793 21.875 3.125 20.1221 3.125 17.9688C3.125 16.7236 3.7207 15.5811 4.6875 14.8535V5.46875C4.6875 4.1748 5.7373 3.125 7.03125 3.125C8.3252 3.125 9.375 4.1748 9.375 5.46875V14.8535C10.3418 15.5762 10.9375 16.7236 10.9375 17.9688C10.9375 20.1221 9.18457 21.875 7.03125 21.875ZM7.8125 15.7666V14.8438C7.8125 14.4141 7.46094 14.0625 7.03125 14.0625C6.60156 14.0625 6.25 14.4141 6.25 14.8438V15.7666C5.3418 16.0889 4.6875 16.9482 4.6875 17.9688C4.6875 19.2627 5.7373 20.3125 7.03125 20.3125C8.3252 20.3125 9.375 19.2627 9.375 17.9688C9.375 16.9482 8.7207 16.0889 7.8125 15.7666Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_864_3786">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="reading">
                00
              </div>
              <div className="battery-temp">
                Battery <br />Temperature
              </div>
            </div>
            <div className="gensets-stat-card" id="gensets-stat-card-2">
              <div className="utilization-factor">Utilization Factor</div>
              <div className="utilization-factor-stat">22%</div>
            </div>
            <div className="gensets-stat-card" id="gensets-stat-card-3">
              <div className="warning">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 4.2L16.8455 17.8947H3.15455L10 4.2ZM10 0L0 20H20L10 0ZM10.9091 14.7368H9.09091V16.8421H10.9091V14.7368ZM10.9091 8.42105H9.09091V12.6316H10.9091V8.42105Z" fill="white" />
                </svg>
              </div>
              <div className="warning-stat">6</div>
              <div className="alerts-shutdown">Alerts <br />Shutdown</div>
              <div className="alerts-shutdown-stat">4 <br />2</div>
            </div>
            <div className="gensets-stat-card" id="gensets-stat-card-4">
              <div className="frequency-symbol">

              </div>
              <div className="frequency-title">Frequency <br />(Hz)</div>
              <div className="frequency-value">50</div>
            </div>
            <div className="gensets-stat-card" id="gensets-stat-card-5">
              <div className="clock-symbol">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                  <path d="M11.5 0C5.14718 0 0 4.80403 0 10.7333C0 16.6626 5.14718 21.4667 11.5 21.4667C17.8528 21.4667 23 16.6626 23 10.7333C23 4.80403 17.8528 0 11.5 0ZM14.1478 15.1522L10.0579 12.378C9.91411 12.2784 9.83065 12.1226 9.83065 11.9581V4.67419C9.83065 4.38855 10.081 4.15484 10.3871 4.15484H12.6129C12.919 4.15484 13.1694 4.38855 13.1694 4.67419V10.6338L16.1139 12.6333C16.3643 12.8021 16.4153 13.1267 16.2345 13.3604L14.9268 15.0396C14.746 15.269 14.3982 15.321 14.1478 15.1522Z" fill="white" />
                </svg>
              </div>
              <div className="hours-operated-title">
                Hours <br />Operated <br />Yesterday
              </div>
              <div className="hours-operated-value">4</div>
            </div>
            <div className="gensets-stat-card" id="gensets-stat-card-6">
              <div className="power-symbol">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                  <path d="M11.5 0C5.1508 0 0 5.1508 0 11.5C0 17.8492 5.1508 23 11.5 23C17.8492 23 23 17.8492 23 11.5C23 5.1508 17.8492 0 11.5 0ZM11.5 20.6954C6.42986 20.6954 2.30461 16.5701 2.30461 11.5C2.30461 6.42986 6.42986 2.30461 11.5 2.30461C16.5701 2.30461 20.6954 6.42986 20.6954 11.5C20.6954 16.5701 16.5701 20.6954 11.5 20.6954ZM12.3642 3.43387L7.17886 13.2285H10.7971V19.5661L15.8211 9.77154H12.3642V3.43387Z" fill="white" />
                </svg>
              </div>
              <div className="power-used-title">Power Used <br />Yesterday(kWh)</div>
              <div className="power-used-value">24</div>
            </div>
            <div className="gensets-stat-card" id="gensets-stat-card-7">
              <div className="battery-voltage-symbol">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 25 19" fill="none">
                  <path d="M23.4375 3.125H21.875V0.78125C21.875 0.349609 21.5254 0 21.0938 0H16.4062C15.9746 0 15.625 0.349609 15.625 0.78125V3.125H9.375V0.78125C9.375 0.349609 9.02539 0 8.59375 0H3.90625C3.47461 0 3.125 0.349609 3.125 0.78125V3.125H1.5625C0.699707 3.125 0 3.82471 0 4.6875V17.1875C0 18.0503 0.699707 18.75 1.5625 18.75H23.4375C24.3003 18.75 25 18.0503 25 17.1875V4.6875C25 3.82471 24.3003 3.125 23.4375 3.125ZM9.375 9.76562C9.375 9.98145 9.2002 10.1562 8.98438 10.1562H3.51562C3.2998 10.1562 3.125 9.98145 3.125 9.76562V8.98438C3.125 8.76855 3.2998 8.59375 3.51562 8.59375H8.98438C9.2002 8.59375 9.375 8.76855 9.375 8.98438V9.76562ZM21.875 9.76562C21.875 9.98145 21.7002 10.1562 21.4844 10.1562H19.5312V12.1094C19.5312 12.3252 19.3564 12.5 19.1406 12.5H18.3594C18.1436 12.5 17.9688 12.3252 17.9688 12.1094V10.1562H16.0156C15.7998 10.1562 15.625 9.98145 15.625 9.76562V8.98438C15.625 8.76855 15.7998 8.59375 16.0156 8.59375H17.9688V6.64062C17.9688 6.4248 18.1436 6.25 18.3594 6.25H19.1406C19.3564 6.25 19.5312 6.4248 19.5312 6.64062V8.59375H21.4844C21.7002 8.59375 21.875 8.76855 21.875 8.98438V9.76562Z" fill="white" />
                </svg>
              </div>
              <div className="battery-voltage-title">Battery <br />Voltage (V)</div>
              <div className="battery-voltage-value">450</div>
            </div>
            <div className="gensets-stat-card" id="gensets-stat-card-8">
              <div className="battery-level-symbol">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                  <path d="M21.25 2.5V5H22.5V7.5H21.25V10H2.5V2.5H21.25ZM21.875 0H1.875C0.839453 0 0 0.839453 0 1.875V10.625C0 11.6605 0.839453 12.5 1.875 12.5H21.875C22.9105 12.5 23.75 11.6605 23.75 10.625V10H24.0625C24.5803 10 25 9.58027 25 9.0625V3.4375C25 2.91973 24.5803 2.5 24.0625 2.5H23.75V1.875C23.75 0.839453 22.9105 0 21.875 0ZM20 3.75H3.75V8.75H20V3.75Z" fill="white" />
                </svg>
              </div>
              <div className="battery-level-title">Charging <br />Current (Amp)</div>
              <div className="battery-level-value">345</div>
            </div>
            <div className="gensets-stat-card" id="gensets-stat-card-9">
              <div className="discharging-levels">
                Discharging <br />Current (Amp)
              </div>
              <div className="discharging-level-reading">276</div>
            </div>
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


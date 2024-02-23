import React from 'react'
import './Mains.css'
const Mains = () => {
  return (
    <div className="mains">
    <div className="section" id="left-seciton">
        <div className="top-left" id="image-section"></div>
        <div className="bottom-left">
            <div className="bottom-left-content" id="cards">
                <div className="card" id="maintenance-dates">
                    <div className="maintenance-content">
                        <p>Maintenance</p>
                        <p>Last Date</p>
                        <p>Due Date</p>
                    </div>

                </div>
                <div className="card" id="utilization-factor">
                    <p>Utilization factor</p>
                    <p>Power factor</p>
                    <p></p>
                </div>
                <div className="card" id="notifications-alerts">
                    <p>Notificaations</p>
                    <p>Alerts</p>
                    <p>Shutdown</p>
                </div>
                <div className="card" id="frequency">
                    <p>Frequency</p>
                    <p>Breaker Status</p>
                    <p></p>
                </div>
            </div>
            <div className="bottom-left-content" id="notifications">
                <h3>Notifications</h3>
                <div className="notification-grid">
                    <div className="notification-grid-data" id='heading'></div>
                    <div className="notification-grid-data" id='notification-data'></div>
                    <div className="notification-grid-data" id='notification-data'></div>
                </div>
            </div>
        </div>
    </div>
    <div className="section" id="right-section">
        <div className="rows" id="top-card">
            <div className="part" id="pie-chart"></div>
            <div className="part" id="yesterday"></div>`1`
        </div>
        <div className="rows" id="power-table"></div>
        <div className="rows" id="stats-cards">
            <div className="kwh-saving" id="card1">Operating Hours</div>
            <div className="kwh-saving" id="card2">Toat</div>
            <div className="kwh-saving" id="card3">1</div>
            <div className="kwh-saving" id="card4">1</div>
        </div>
        <div className="rows" id="voltage-current"></div>
    </div>
</div>
  )
}

export default Mains
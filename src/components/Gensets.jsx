import React from 'react'
import './Gensets.css'
const Gensets = () => {
  return (
    <div className="gensets">
        <div className="section" id="left-section">
            <div className="top-left">
                <div className="stats">
                </div>
            </div>
            <div className="bottom-left">
                <div className="box" id="battery-temperature">battery-temperature</div>
                <div className="box" id="utilization-factor">utilization-factor</div>
                <div className="box" id="alerts-shutdown">alerts-shutdown</div>
                <div className="box" id="frequency">frequency</div>
                <div className="box" id="hours-operated">hours-operated</div>
                <div className="box" id="power-used">power-used</div>
                <div className="box" id="battery-voltage">battery-voltage</div>
                <div className="box" id="charging-current">charging-current</div>
                <div className="box" id="discharging-current">discharging-current</div>
                <div className="box" id="meters">
                    <div className="meter-row">
                        <div className="meter-table" id="energy-consumption">Energy Consumption</div>
                    </div>
                    <div className="meter-row">
                        <div className="meter-table" id="soc">State of Charge (SOC)</div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="section" id="right-section">
            <div className="right-rows" id="operating-hour-table">operating-hour-table</div>
            <div className="right-rows" id="health-index">health-index</div>
            <div className="right-rows" id="power">power</div>
            <div className="right-rows" id="voltage-current">voltage-current</div>
            <div className="right-rows" id="notifications">notifications</div>
        </div>
    </div>
  )
}

export default Gensets
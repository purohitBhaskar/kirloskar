import React from 'react'
import './Overview.css'
import OverviewTable from './OverviewTable'
const Overview = () => {
    return (
        <div className="overview">
            <div className="section" id='left-element'>
                <div className="left-content" id="top-left"></div>
                <div className="left-content" id="bottom-left">
                    <div className='bottom-left-row' id="bottom-left-row1">Notifications</div>
                    <div className='bottom-left-row' id="bottom-left-row2">
                        
                    </div>
                    <div className='bottom-left-row' id="bottom-left-row3">1</div>
                    <div className='bottom-left-row' id="bottom-left-row4">1</div>
                    <div className='bottom-left-row' id="bottom-left-row5">1</div>
                    <div className='bottom-left-row' id="bottom-left-row6">1</div>
                    <div className='bottom-left-row' id="bottom-left-row7">1</div>
                    <div className='bottom-left-row' id="bottom-left-row8">1</div>
                </div>


            </div>
            <div className="section" id='right-section'>
                <div className="right-grids">
                    <div className="top-grid" id="top-grid-pie-chart"></div>
                    <div className="top-grid" id="top-grid-total-energy-generated"></div>
                </div>
                <div className="right-grids" id='middle-grid'>
                    <div className="middle-left">
                        <div className="cards-middle-left"></div>
                        <div className="cards-middle-left"></div>
                        <div className="cards-middle-left"></div>
                    </div>
                    <div className="middle-right">
                        <div className="middle-right-card-section">
                            <div className="energy-card"></div>
                            <div className="alerts-card"></div>
                            <div className="savings-card"></div>
                        </div>
                        <div className="middle-right-pie-chart"></div>
                    </div>
                </div>
                <div className="right-grids">
                    <div className="bottom-right" id="power"></div>
                    <div className="bottom-right" id="avg-current"></div>
                </div>
            </div>
        </div>
    )
}

export default Overview
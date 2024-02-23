import React from 'react'

const Overview = () => {
  return (
    <div className="parent">
    <div className="section" id="left-section">
        <div className="row" id="image">image</div>
        <div className="row" id="table">table</div>
    </div>
    <div className="section" id="right-section">
        <div className="subgrids" id="subgrid-1">
            <div className="head" id="head-1">head-1</div>
            <div className="head" id="head-2">head-2</div>
        </div>
        <div className="subgrids" id="subgrid-2">
            <div className="head" id="head-3">head-3</div>
            <div className="head" id="head-4">head-4</div>
            <div className="head" id="head-5">head-5</div>
        </div>
        <div className="subgrids" id="subgrid-3">
            <div className="head" id="head-6">head-6</div>
            <div className="head" id="head-7">head-7</div>
            <div className="head" id="head-8">head-8</div>
            <div className="head" id="head-9">head-9</div>
        </div>
        <div className="subgrids" id="subgrid-4">
            <div className="head" id="head-10">head-10</div>
            <div className="head" id="head-11">head-11</div>
        </div>

    </div>
   </div>
  )
}

export default Overview
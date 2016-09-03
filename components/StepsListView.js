import React from 'react'

const StepsListView = ({ steps }) => (
<div>
<row>
  <div className="col-sm-6">

  </div>
  <div className="col-sm-6">

  </div>
</row>
  <ul>
    {steps.map(step =>
      <li>
        <label> {step} </label>
      </li>
    )}
  </ul>
  </div>
)

export default StepsListView

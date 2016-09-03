import React from 'react'

const StepsListView = ({ steps }) => (
<div>
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

import React from 'react'

const StepsListView = ({ steps, onSubmit }) => (
<div>
<form onSubmit={e => {
      e.preventDefault()

      let text = document.getElementById("step").value;

      onSubmit(text)
    }}>

    <textarea rows="4" cols="50" id="step"></textarea> <button className="btn btn-success"> Add </button>

</form>
<div className="ingredientsContainer">
  <ul>
    {steps.map(step =>
      <li>
        <label> {step.text} </label>
      </li>
    )}
  </ul>
  </div>
  </div>
)

export default StepsListView

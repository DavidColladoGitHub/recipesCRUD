import React from 'react'

const StepsListView = ({ steps, onSubmit }) => (
<div>
<form onSubmit={e => {
      e.preventDefault()

      let text = document.getElementById("step").value;

      onSubmit(text)

      document.getElementById("step").value = "";
    }}>

    <div className="form-group">
      <label>Steps:</label>
      <textarea className="form-control" rows="4" cols="50" id="step"></textarea>
      <button className="btn btn-success"> Add </button>
    </div>

</form>
<div className="ingredientsContainer">
  <ul>
    {steps.map((step, index) =>
      <li key={index}>
        <label> {step.text} </label>
      </li>
    )}
  </ul>
  </div>
  </div>
)

export default StepsListView

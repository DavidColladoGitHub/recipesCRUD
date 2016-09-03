import React from 'react'
import IngredientsList from '../containers/IngredientsList'
import StepsList from '../containers/StepsList'

var tempRecipe = {};
const AddRecipeForm = ( onSubmit ) => (
  <div className="container">
  <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        onSubmit(tempRecipe.name, tempRecipe.steps, tempRecipe.ingredients)
      }}>
    <row>
      <div className="col-sm-6">
      <input /> <input /> <button className="btn btn-success"> Add </button>
      </div>
      <div className="col-sm-6">
      <textarea rows="8" cols="50" /> <button className="btn btn-success"> Add </button>
      </div>
    </row>
    <row>
      <div className="col-sm-6">
        <IngredientsList />
      </div>
      <div className="col-sm-6">
        <StepsList />
      </div>
    </row>
    <button className="btn btn-success right"> Add </button>
    </form>
  </div>
)

export default AddRecipeForm

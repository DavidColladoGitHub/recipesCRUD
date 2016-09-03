import React from 'react'
import IngredientsList from '../containers/IngredientsList'
//import StepsList from '../containers/StepsList'
import addIngredient from '../actions/recipe-actions'

var tempRecipe = {};
class AddRecipeForm extends React.Component {
render () {
  return (
    <div className="container">
    < IngredientsList />
    <form onSubmit={e => {
          e.preventDefault()

          if (!input.value.trim()) {
            return
          }

          onSubmit(tempRecipe.name, tempRecipe.steps, tempRecipe.ingredients)
        }}>

      <button type="submit" className="btn btn-success right"> Add </button>
      </form>
    </div>
  )
}
}

export default AddRecipeForm

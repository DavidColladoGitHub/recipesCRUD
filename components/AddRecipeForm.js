import React from 'react'
import IngredientsList from '../containers/IngredientsList'
import StepsList from '../containers/StepsList'
import addIngredient from '../actions/recipe-actions'

var tempRecipe = {};
class AddRecipeForm extends React.Component {
render () {
  return (
    <div>
    <div className = "jumbotron">
      <h1 className="title"> Create recipe</h1>
    </div>
    <div className="container">
    <input id="recipeName" />
    <div className="row">
      <div className="col-sm-6">
        <IngredientsList />
      </div>
      <div className="col-sm-6">
        <StepsList />
      </div>
    </div>
    <form onSubmit={e => {
          e.preventDefault()

          this.props.onSubmit(document.getElementById("recipeName").value, this.props.currentRecipe)
        }}>

      <button type="submit" className="btn btn-success"> Add </button>
      </form>
    </div>
    </div>
  )
}
}

export default AddRecipeForm

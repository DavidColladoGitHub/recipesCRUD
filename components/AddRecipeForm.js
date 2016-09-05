import React from 'react'
import IngredientsList from '../containers/IngredientsList'
import StepsList from '../containers/StepsList'
import addIngredient from '../actions/recipe-actions'
import { Link } from 'react-router';

var tempRecipe = {};
class AddRecipeForm extends React.Component {
render () {
  return (
    <div>
    <div className = "jumbotron">
      <h1 className="title"> Create recipe</h1>
    </div>
    <div className="container">
    <div className="form-group">
      <label>Recipe Name:</label>
      <input type="text" className="form-control" id="recipeName" />
    </div>
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
          var recipeName = document.getElementById("recipeName").value
          var currentRecipe = this.props.currentRecipe;
          //Simple validate system. Will improve

          if (recipeName && currentRecipe.steps.length > 0 && currentRecipe.ingredients.length > 0) {
            this.props.onSubmit(recipeName, currentRecipe)
            document.getElementById("recipeName").value = "";
          } else {
            alert("Please, add at least one ingredient and one step");
          }

        }}>
        <div className="row">
          <button type="submit" className="btn btn-success floatRight"> Add Recipe </button>
          <Link className="btn btn-info floatRight" to="/recipes">Recipe list</Link>
        </div>
      </form>
    </div>
    </div>
  )
}
}

export default AddRecipeForm

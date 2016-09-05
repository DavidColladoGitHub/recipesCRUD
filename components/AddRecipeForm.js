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
    <Link className="btn btn-success" to="/recipes">Recipe list</Link>
    <div className = "jumbotron">
      <h1 className="title"> Create recipe</h1>
    </div>
    <div className="container">
    <div className="form-group">
      <label>Recipe Name:</label>
      <input type="text" className="form-control" id="recipeName" />
    </div>
    <div className="row">
      <div className="col-sm-5">
        <IngredientsList />
      </div>
      <div className="col-sm-5">
        <StepsList />
      </div>
    </div>
    <div className="col-sm-2">
    <form onSubmit={e => {
          e.preventDefault()

          this.props.onSubmit(document.getElementById("recipeName").value, this.props.currentRecipe)
          document.getElementById("recipeName").value = "";
        }}>

          <button type="submit" className="btn btn-success"> Add Recipe </button>

      </form>
      </div>
    </div>
    </div>
  )
}
}

export default AddRecipeForm

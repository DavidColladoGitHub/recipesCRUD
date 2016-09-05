import React from 'react'
import getRecipe from "../actions/recipe-actions"
import { Link } from 'react-router'

var RecipeDetail = React.createClass({
  render() {
    return <div>
        <div className="jumbotron">
          <h1 className="title">{this.props.name}</h1>
        </div>
        <div className="container">
          <div className="col-sm-6">
            <div className="ingredientsContainer">
              <ul>
                {this.props.ingredients.map((ingredient, index) =>
                  <li key={index}>
                    <label > {ingredient.name} / {ingredient.quantity} </label>
                  </li>
                )}
              </ul>
              </div>
              </div>
              <div className="col-sm-6">
              <div className="ingredientsContainer">
                <ul>
                  {this.props.steps.map((step, index) =>
                    <li key={index}>
                      <label > {step.text} </label>
                    </li>
                  )}
                </ul>
                </div>
              </div>
            </div>
            <div className="buttons">
              <Link className="btn btn-success margin5 customButton" to="/recipes">See recipes</Link>
              <Link className="btn btn-success margin5 customButton" to="/add">Create recipe</Link>
            </div>
    </div>
  }
});

export default RecipeDetail

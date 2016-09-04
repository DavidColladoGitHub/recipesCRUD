import React from 'react'
import getRecipe from "../actions/recipe-actions"

var RecipeDetail = React.createClass({
  render() {
    return <div>
        <label>{this.props.name}</label>
    </div>
  }
});

export default RecipeDetail

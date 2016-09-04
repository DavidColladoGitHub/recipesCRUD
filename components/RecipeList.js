import React from 'react'
import Recipe from './recipe'
import { Link } from 'react-router'

var RecipeList = React.createClass({
render() {
   return <div>
   <div className="jumbotron">
     <h1 className="title">Recipe list</h1>
   </div>
   <div className="container">
    <ul className="list">
      {this.props.recipes.map(recipe =>
        <li>
        <Recipe
          key={recipe.id}
          {...recipe}
          onClick={() => this.props.onRecipeClick(recipe.id)}
        />
        </li>
      )}
    </ul>
  <Link to="/add" className="btn btn-success btnAddRecipe">Create recipe</Link>
  </div>
  </div>
}
});

export default RecipeList

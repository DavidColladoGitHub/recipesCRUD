import React from 'react'
import Recipe from './recipe'
import { Link } from 'react-router'

var RecipeList = React.createClass({
navigate(id) {
  this.context.router.push("/detail/"+ id)
},
render() {
   return <div>
   <div className="jumbotron">
     <h1 className="title">Recipe list</h1>
   </div>
   <div className="container">
    <ul className="list">
      {this.props.recipes.map((recipe, index) =>
        <li key={index}>
        <Recipe
          key={recipe.id}
          {...recipe}
          onClick={() => this.navigate(recipe.id)}
        />
        </li>
      )}
    </ul>
  <Link to="/add" className="btn btn-success btnAddRecipe">Create recipe</Link>
  </div>
  </div>
},
contextTypes: {
    router: React.PropTypes.object.isRequired
}
});

export default RecipeList

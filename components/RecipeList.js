import React from 'react'
import Recipe from './recipe'
import { Link } from 'react-router'

const RecipeList = ({ recipes, onRecipeClick }) => (
<div>
  <ul>
    {recipes.map(recipe =>
      <Recipe
        key={recipe.id}
        {...recipe}
        onClick={() => onRecipeClick(recipe.id)}
      />
    )}
  </ul>
  <Link to="create">Create recipe</Link>
  </div>
)

export default RecipeList

import React from 'react'
import Recipe from './recipe'

const RecipeList = ({ recipes, onRecipeClick }) => (
  <ul>
    {recipes.map(recipe =>
      <Recipe
        key={recipe.id}
        {...recipe}
        onClick={() => onRecipeClick(recipe.id)}
      />
    )}
  </ul>
)

export default RecipeList

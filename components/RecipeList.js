import React, { PropTypes } from 'react'

const RecipeList = ({ recipe, onRecipeClick }) => (
  <ul>
    {recipe.map(recipe =>
      <Recipe
        key={recipe.id}
        {...recipe}
        onClick={() => onRecipeClick(recipe.id)}
      />
    )}
  </ul>
)

export default RecipeList

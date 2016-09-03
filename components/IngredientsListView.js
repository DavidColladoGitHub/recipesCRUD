import React from 'react'

const IngredientsList = ({ ingredients }) => (
<div>
  <ul>
    {ingredients.map(ingredient =>
      <li>
        <label> {ingredient.name} </label>
      </li>
    )}
  </ul>
  </div>
)

export default IngredientsList

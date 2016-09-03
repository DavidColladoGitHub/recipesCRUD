import React from 'react'

const Recipe = ({ onClick, name, ingredients, quantity }) => (
  <li onClick={onClick}>
    {name}
  </li>
)

export default Recipe

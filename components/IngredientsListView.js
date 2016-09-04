import React from 'react'

const IngredientsList = ({ ingredients, onSubmit }) => (
<div>
<form onSubmit={e => {
      e.preventDefault()

      let name = document.getElementById("name").value;
      let quantity = document.getElementById("quantity").value;

      onSubmit(name, quantity)
    }}>

  <input id="name" /> <input id="quantity" /> <button className="btn btn-success"> Add </button>

</form>
  <ul>
    {ingredients.map(ingredient =>
      <li>
        <label> {ingredient.name} / {ingredient.quantity} </label>
      </li>
    )}
  </ul>
  </div>
)

export default IngredientsList

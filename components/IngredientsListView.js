import React from 'react'

const IngredientsList = ({ ingredients, onSubmit }) => (
<div>
<form onSubmit={e => {
      e.preventDefault()

      let name = document.getElementById("name").value;
      let quantity = document.getElementById("quantity").value;

      onSubmit(name, quantity)
    }}>

  <input id="name" placeholder="Ingredient" /> <input id="quantity" placeholder="Quantity" /> <button className="btn btn-success"> Add </button>

</form>
  <div className="ingredientsContainer">
  <ul>
    {ingredients.map(ingredient =>
      <li>
        <label> {ingredient.name} / {ingredient.quantity} </label>
      </li>
    )}
  </ul>
  </div>
  </div>
)

export default IngredientsList

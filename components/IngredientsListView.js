import React from 'react'

const IngredientsList = ({ ingredients, onSubmit }) => (
<div>
<form onSubmit={e => {
      e.preventDefault()

      let name = document.getElementById("name").value;
      let quantity = document.getElementById("quantity").value;

      onSubmit(name, quantity)

      document.getElementById("name").value = "";
      document.getElementById("quantity").value = "";
    }}>

    <div className="form-group">
      <input id="name" placeholder="Ingredient" className="form-control"/>
      <input id="quantity" placeholder="Quantity" className="form-control"/>
      <button className="btn btn-success"> Add </button>
    </div>


</form>
  <div className="ingredientsContainer">
  <ul>
    {ingredients.map((ingredient, index) =>
      <li key={index}>
        <label> {ingredient.name} / {ingredient.quantity} </label>
      </li>
    )}
  </ul>
  </div>
  </div>
)

export default IngredientsList

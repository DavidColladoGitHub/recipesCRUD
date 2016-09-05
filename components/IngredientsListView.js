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

<div className = "row">
  <div className="col-sm-10">
      <div className="form-group">
        <label>Ingredient: </label>
        <input id="name" placeholder="Ingredient" className="form-control"/>
        <label>Quantity: </label>
        <input id="quantity" placeholder="Quantity" className="form-control"/>
      </div>
  </div>
  <div className="col-sm-2">
  <button className="btn btn-success bottomright"> Add </button>
  </div>
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

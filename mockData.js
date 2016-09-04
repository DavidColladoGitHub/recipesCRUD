import { addRecipe } from './actions/recipe-actions.js'

function data(store) {
  // Log the initial state
  console.log(store.getState())

  let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
  )

  // Dispatch some actions
  store.dispatch(addRecipe("Receta 1", [{text: "Step 1"}, {text: "Step 2"}], [{name: "Ingredient 1", quantity: 1}]));
  store.dispatch(addRecipe("Receta 2", [{text: "Step 1"}, {text: "Step 2"}], [{name: "Ingredient 1", quantity: 1}]));
  //store.dispatch(addRecipe({steps: ["Step 1", "Step 2"], ingredients: [{name: "Ingredient 2", quantity: 1}]})
}

export default data

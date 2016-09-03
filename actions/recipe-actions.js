let recipeId = 0
export const addRecipe = (name, steps, ingredients) => {
  return {
    type: 'ADD_RECIPE',
    id: recipeId++,
    name,
    steps,
    ingredients,
  }
}

export const addIngredient = (name, quantity) => {
  return {
    type: 'ADD_INGREDIENT',
    name,
    quantity,
  }
}

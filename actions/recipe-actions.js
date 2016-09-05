let recipeId = 1
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

export const addStep = (text) => {
  return {
    type: 'ADD_STEP',
    text,
  }
}

export const emptyCurrentRecipe = () => {
  return {
    type: 'EMPTY_RECIPE'
  }
}

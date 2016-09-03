let recipeId = 0
export const addRecipe = (steps, ingredients) => {
  return {
    type: 'ADD_RECIPE',
    id: recipeId++,
    steps,
    ingredients
  }
}

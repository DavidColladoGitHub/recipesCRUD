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

const currentRecipe = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
        ingredients: action.ingredients
      }

    default:
      return state
  }
}

export default currentRecipe

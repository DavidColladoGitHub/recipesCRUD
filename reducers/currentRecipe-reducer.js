const ingredient = (state, action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
        name: action.name,
        quantity: action.quantity
      }


    default:
      return state
  }
}

const currentRecipe = (state = {name: "", ingredients: [], steps: []}, action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
          ingredients: [
          ...state.ingredients,
          ingredient(undefined, action)
        ]
      }

    default:
      return state
  }
}

export default currentRecipe

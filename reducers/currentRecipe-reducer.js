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

const step = (state, action) => {
  switch (action.type) {
    case 'ADD_STEP':
      return {
        text: action.text
      }

    default:
      return state
  }
}

const currentRecipe = (state = {name: "", ingredients: [], steps: []}, action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
          steps: state.steps,
          ingredients: [
          ...state.ingredients,
          ingredient(undefined, action)
        ]
      }

  case 'ADD_STEP':
    return {
        ingredients: state.ingredients,
        steps: [
        ...state.steps,
        step(undefined, action)
      ]
    }

    case 'EMPTY_RECIPE':
      return {
          name: "",
          ingredients: [],
          steps: []
      }

  default:
    return state
}
}

export default currentRecipe

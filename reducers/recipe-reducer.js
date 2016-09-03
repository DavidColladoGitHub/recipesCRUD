const recipe = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return {
        id: action.id,
        steps: action.steps,
        ingredients: action.ingredients
      }

    default:
      return state
  }
}

export default recipe

const recipe = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return {
        id: action.id,
        name: action.name,
        steps: action.steps,
        ingredients: action.ingredients
      }

    default:
      return state
  }
}

const recipes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [
        ...state,
        recipe(undefined, action)
      ]
    default:
      return state
  }
}

export default recipes

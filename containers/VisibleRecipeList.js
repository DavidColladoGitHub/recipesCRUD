//Not using at the moment, but useful in the future. Maybe with some kind of "pending of approval" recipe condition

import { connect } from 'react-redux'
import RecipeList from '../components/RecipeList'

const getVisibleRecipes = (recipes) => {
  return recipes
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleRecipes(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRecipeClick: (id) => {
      dispatch(toggleRecipe(id))
    }
  }
}

const VisibleRecipeList = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeList)

export default VisibleRecipeList

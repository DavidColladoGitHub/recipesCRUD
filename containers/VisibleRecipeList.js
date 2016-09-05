//Not using at the moment, but useful in the future. Maybe with some kind of "pending of approval" recipe condition

import { connect } from 'react-redux'
import RecipeList from '../components/RecipeList'

const getVisibleRecipes = (recipes) => {
  return recipes
}

const mapStateToProps = (state) => {
  return {
    recipes: getVisibleRecipes(state.recipes)
  }
}

const VisibleRecipeList = connect(
  mapStateToProps
)(RecipeList)

export default VisibleRecipeList

import { combineReducers } from 'redux'
import recipes from './recipe-reducer'
import currentRecipe from './currentRecipe-reducer'

const recipeApp = combineReducers({
  recipes,
  currentRecipe
})

export default recipeApp

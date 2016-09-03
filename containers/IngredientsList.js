import IngredientsListView from '../components/IngredientsListView'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  return state.currentRecipe;
}

let IngredientsList = connect(mapStateToProps)(IngredientsListView)

export default IngredientsList

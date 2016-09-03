import IngredientsListView from '../components/IngredientsListView'
import { connect } from 'react-redux'
import { addIngredient } from '../actions/recipe-actions';


const mapStateToProps = (state) => {
  return state.currentRecipe;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (name, quantity) => {
      dispatch(addIngredient(name, quantity))
    }
  }
}

let IngredientsList = connect(mapStateToProps, mapDispatchToProps)(IngredientsListView)

export default IngredientsList

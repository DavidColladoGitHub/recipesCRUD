import  AddRecipeForm from '../components/AddRecipeForm';
import { connect } from 'react-redux';
import { addRecipe } from '../actions/recipe-actions';

const mapStateToProps = (state) => {
  return {
    currentRecipe: state.currentRecipe
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (name, currentRecipe) => {
      dispatch(addRecipe(name, currentRecipe.steps, currentRecipe.ingredients))
    }
  }
}

let AddRecipe = connect(mapStateToProps, mapDispatchToProps)(AddRecipeForm)

export default AddRecipe

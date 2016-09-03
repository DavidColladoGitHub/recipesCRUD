import  AddRecipeForm from '../components/AddRecipeForm';
import { connect } from 'react-redux';
import { addRecipe } from '../actions/recipe-actions';


const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (name, steps, ingredients) => {
      dispatch(addRecipe(name, steps, ingredients))
    }
  }
}

let AddRecipe = connect(null, mapDispatchToProps)(AddRecipeForm)

export default AddRecipe

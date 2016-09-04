import StepsListView from '../components/StepsListView'
import { connect } from 'react-redux'
import { addStep } from '../actions/recipe-actions';


const mapStateToProps = (state) => {
  return state.currentRecipe;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (step) => {
      dispatch(addStep(step))
    }
  }
}

let StepsList = connect(mapStateToProps, mapDispatchToProps)(StepsListView)

export default StepsList

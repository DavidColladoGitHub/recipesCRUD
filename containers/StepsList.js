import StepsListView from '../components/StepsListView'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  return state.currentRecipe;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (step) => {
      dispatch(addStep(step))
      console.log(this.context.redux.getState())
    }
  }
}

let StepsList = connect(mapStateToProps, mapDispatchToProps)(StepsListView)

export default StepsList

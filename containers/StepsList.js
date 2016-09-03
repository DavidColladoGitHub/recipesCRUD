import StepsListView from '../components/StepsListView'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  return state.currentRecipe;
}

let StepsList = connect(mapStateToProps)(StepsListView)

export default StepsList

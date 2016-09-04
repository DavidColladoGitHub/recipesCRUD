import React from 'react';
import { connect } from 'react-redux';
import RecipeDetail from '../components/RecipeDetail'

const mapStateToProps = (state, ownProps) => {
  //return {item: _.find(state.recipes, 'id', ownProps.params.id)}
  var arr = state.recipes.filter((obj) => {
    if (obj.id == ownProps.params.id) {
      return true;
    } else {
      return false;
    }
  });

  return arr[0]
};

let RecipeDetailContainer = connect(mapStateToProps)(RecipeDetail)

export default RecipeDetailContainer

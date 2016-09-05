import React from 'react'
import VisibleRecipeList from '../containers/VisibleRecipeList'
import { Link } from 'react-router'

var App = React.createClass ({
  render () {
    return <div>
    <div className="container-fluid noPadding">
      <div className="jumbotron">
        <h1 className="title">Recipes</h1>
      </div>
        <div className="buttons">
          <Link className="btn btn-success margin5 customButton" to="/recipes">See recipes</Link>
          <Link className="btn btn-success margin5 customButton" to="/add">Create recipe</Link>
        </div>
    </div>
    </div>
}
});

export default App

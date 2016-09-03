import React from 'react'
import VisibleRecipeList from '../containers/VisibleRecipeList'
import { Link } from 'react-router'

const App = () => (
  <div>
    <h1>Recipes</h1>
    <footer>
      <Link className="btn btn-success" to="/recipes">See recipes</Link>
      <Link className="btn btn-success" to="/create">Create recipe</Link>
    </footer>
  </div>
)

export default App

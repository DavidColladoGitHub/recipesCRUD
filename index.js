import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import recipeApp from './reducers/index'
import App from './components/App'
import AddRecipe from './containers/AddRecipe'
import VisibleRecipeList from './containers/VisibleRecipeList'
import data from './mockData'

let store = createStore(recipeApp)

data(store);


render((
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <IndexRoute component={AddRecipe} />
    <Route path="/add" component={AddRecipe}/>
    <Route path="/recipes" component={VisibleRecipeList}/>
  </Router>
  </Provider>
), document.getElementById('app')
)

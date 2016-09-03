import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import recipes from './reducers/recipe-reducer'
import App from './components/App'
import CreateRecipe from './components/CreateRecipe'
import VisibleRecipeList from './containers/VisibleRecipeList'
import data from './mockData'

let store = createStore(recipes)

data(store);


render((
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <IndexRoute component={CreateRecipe} />
    <Route path="/create" component={CreateRecipe}/>
    <Route path="/recipes" component={VisibleRecipeList}/>
  </Router>
  </Provider>
), document.getElementById('app')
)

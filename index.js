import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import recipes from './reducers/recipe-reducer'
import App from './components/App'
import data from './mockData'

let store = createStore(recipes)

data(store);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

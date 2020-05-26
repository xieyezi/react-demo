import React from 'react'
import { Provider } from 'react-redux'
import geneGrateSotore from './store'
import Router from './router'
import './App.css'
import { ConnectedRouter } from 'connected-react-router'
const createHistory = require('history').createBrowserHistory
export const history = createHistory()

const store = geneGrateSotore(history)
const f: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router></Router>
      </ConnectedRouter>
    </Provider>
  )
}

export default f

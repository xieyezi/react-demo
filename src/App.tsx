import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import geneGrateSotore from './store'
import Router from './router'
import './App.css'

const createHistory = require('history').createBrowserHistory
const history = createHistory()
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

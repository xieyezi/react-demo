import { createStore, combineReducers, applyMiddleware } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import infoRuder from './reducer/info'

export default function geneGrateSotore(history: any) {
  const routerReducer = connectRouter(history)
  const routerMiddlewareForDispatch = routerMiddleware(history)
  const middleware = [routerMiddlewareForDispatch]
  //合并routerReducer
  const rootRuder = () =>
    combineReducers({
      info: infoRuder,
      router: routerReducer,
    })
  const store = createStore(rootRuder, applyMiddleware(...middleware))
  return store
}

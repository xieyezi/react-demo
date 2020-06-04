import { connectRouter, routerMiddleware } from 'connected-react-router'
import dva from './dva'
import models from '../models'

export default function geneGrateSotore(history: any) {
  const routerReducer = connectRouter(history)
  const routerMiddlewareForDispatch = routerMiddleware(history)
  const app = dva({
    models,
    initState: {},
    extraReducers: { router: routerReducer },
    onAction: [routerMiddlewareForDispatch]
  })
  return app
}

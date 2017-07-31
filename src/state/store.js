
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'

import {enhancer, middleware, reducer} from 'state/routes'

const composeMiddlewares = applyMiddleware(middleware)

// Use Redux DevTools Extension if available and not in production.
const composeEnhancers = ((process.env.NODE_ENV !== 'production') && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(
  combineReducers({
    location: reducer
  }),
  composeEnhancers(enhancer, composeMiddlewares)
)

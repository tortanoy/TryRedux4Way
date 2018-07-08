import { 
  createStore, 
  applyMiddleware,
  compose 
} from 'redux'
import app from './reducers'

import createSagaMiddleware from 'redux-saga'
import dataSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  let store = createStore(
    app, 
    composeEnhancers(
      applyMiddleware(sagaMiddleware)
    )
  )
  sagaMiddleware.run(dataSaga)
  return store
}
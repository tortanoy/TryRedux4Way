import { 
  createStore, 
  applyMiddleware,
  compose 
} from 'redux'
import app from './reducers'
import thunk from 'redux-thunk'

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  let store = createStore(
    app, 
    composeEnhancers(
      applyMiddleware(thunk)
    )
  )
  return store
}
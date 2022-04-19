import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import loansSlice from './slices/loansSlice';

const configureStore = () => {
  const middlewares = [thunkMiddleware]
  const store = createStore(
    combineReducers({
      loans: loansSlice
    }),
    compose(applyMiddleware(...middlewares))
  )
  return store
}

const store = configureStore()

export default store

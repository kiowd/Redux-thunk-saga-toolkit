import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './rootReducers'
import reduxThunk from 'redux-thunk';


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(reduxThunk)))

export default store;
import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import alertReducer from './alertReducer';
import {userReducer} from '../reduxThunk/thunk'

const rootReducer = combineReducers({
  cartReducer,
  alertReducer,
  userReducer,
})

export default rootReducer;
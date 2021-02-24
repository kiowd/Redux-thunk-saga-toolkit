import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import alertReducer from './alertReducer';

const rootReducer = combineReducers({
  cartReducer,
  alertReducer
})

export default rootReducer;
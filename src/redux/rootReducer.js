import {combineReducers} from 'redux';
import city from './weatherInput/reducer';

export const rootReducer = combineReducers({
  city
})
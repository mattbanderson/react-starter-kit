import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';

const myApp = combineReducers({
  exampleReducer
  // Other reducers here
});

export default myApp;

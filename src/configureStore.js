import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import myApp from './reducers/reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(myApp, initialState);
}

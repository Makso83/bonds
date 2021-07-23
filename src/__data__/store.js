import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const reduxReducers = combineReducers({ ...reducers });
// eslint-disable-next-line
const composeEnhancers = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

export default createStore(reduxReducers, composeEnhancers);

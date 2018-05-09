import {applyMiddleware, compose, createStore} from 'redux';
// import someReduxMiddleware from 'some-redux-middleware';
// import someOtherReduxMiddleware from 'some-other-redux-middleware';
import rootReducer from './reducers/index.reducer';
import * as actions from './actions/index.action';

// setup

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

// middleware

const greetingMiddleware = () => (next) => (action) => {
  if (action.type === actions.GOOD_NIGHT_ACTION) {
    action.payload = 'Sweet Dream';
  }

  next(action);
};

const composedEnhancer = compose(applyMiddleware(greetingMiddleware), ...enhancerList);

// store

export const initStore = () => createStore(rootReducer, {}, composedEnhancer);

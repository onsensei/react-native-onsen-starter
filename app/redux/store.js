import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index.reducer';
import rootSaga from './sagas/index.saga';
import {applyMiddleware, compose, createStore} from 'redux';
import {fork} from 'redux-saga/effects';
// import * as actions from './actions/index.action';

// middleware

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const sagaMiddleware = createSagaMiddleware();

const greetingMiddleware = () => (next) => (action) => {
  // if (action.type === actions.GOOD_NIGHT_ACTION) {
  //   action.payload = 'Sweet Dream';
  // }

  next(action);
};

const composedEnhancer = composeEnhancers(applyMiddleware(sagaMiddleware, greetingMiddleware));

function* sagas () {
  yield fork(rootSaga);
}

// store

export const initStore = () => {
  const store = createStore(rootReducer, {}, composedEnhancer);
  sagaMiddleware.run(sagas);
  return store;
};

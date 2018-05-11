import message from './message.reducer';
import Router from '../../routes';
import {combineReducers} from 'redux';

// use navigation state in redux instead of state in react-navigation

const nav = (state, action) => (
  Router.router.getStateForAction(action, state) || state
);

export default combineReducers({
  nav,
  greetingState: message
});

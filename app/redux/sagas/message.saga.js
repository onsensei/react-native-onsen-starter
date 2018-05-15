import {call, put, takeLatest} from 'redux-saga/effects';
import * as actions from './../../redux/actions/index.action';

export const defaultDelay = 1000;
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function* greetingAllHandler () {
  yield call(delay, defaultDelay);
  yield put(actions.goodMorningActionCreator({
    message: 'Good Morning from saga',
    time: '8:00'
  }));

  yield call(delay, defaultDelay);
  yield put(actions.goodAfternoonActionCreator({
    message: 'Good Afternoon from saga',
    time: '14:00'
  }));
  
  yield call(delay, defaultDelay);
  yield put(actions.goodNightActionCreator({
    message: 'Good Night from saga',
    time: '20:00'
  }));
}

function* MessageSaga () {
  yield takeLatest(actions.GREETING_ALL_ACTION, greetingAllHandler);
}

export default MessageSaga;

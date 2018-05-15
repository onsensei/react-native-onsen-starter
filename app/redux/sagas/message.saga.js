import {call, put, takeLatest} from 'redux-saga/effects';
import * as actions from './../../redux/actions/index.action';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* greetingAllHandler () {
  yield put(actions.goodMorningActionCreator({
    message: 'Good Morning from saga',
    time: '8:00'
  }));
  yield call(delay, 1000);

  yield put(actions.goodAfternoonActionCreator({
    message: 'Good Afternoon from saga',
    time: '14:00'
  }));
  yield call(delay, 1000);

  yield put(actions.goodNightActionCreator({
    message: 'Good Night from saga',
    time: '20:00'
  }));
  yield call(delay, 1000);
}

function* messageSaga () {
  yield takeLatest(actions.GREETING_ALL_ACTION, greetingAllHandler);
}

export default messageSaga;

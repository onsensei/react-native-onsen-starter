import {call, put, takeLatest} from 'redux-saga/effects';
import * as actions from './../../redux/actions/index.action';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* goodMorningHandler () {
  yield call(console.log, 'good morning');
}

export function* goodAfternoonHandler () {
  yield call(console.log, 'good afternoon');
}

export function* goodNightHandler () {
  yield call(console.log, 'good night');
}

export function* greetingHandler () {
  yield put(actions.greetingMorning('Good Morning from Saga'));
  yield call(delay, 1000);

  yield put(actions.greetingAfternoon('Good Afternoon from Saga'));
  yield call(delay, 1000);

  yield put(actions.greetingNight('Good Night from Saga'));
  yield call(delay, 1000);
}

function* messageSaga () {
  yield takeLatest(actions.GOOD_MORNING_ACTION, goodMorningHandler);
  yield takeLatest(actions.GOOD_AFTERNOON_ACTION, goodAfternoonHandler);
  yield takeLatest(actions.GOOD_NIGHT_ACTION, goodNightHandler);
  yield takeLatest(actions.GREETING_ACTION, greetingHandler);
}

export default messageSaga;

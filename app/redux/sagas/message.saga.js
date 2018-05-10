import {call, put, takeLatest} from 'redux-saga/effects';
import * as actions from './../../redux/actions/index.action';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* goodMorningHandler () {
  //
}

export function* goodAfternoonHandler () {
  //
}

export function* goodNightHandler () {
  //
}

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
  yield takeLatest(actions.GOOD_MORNING_ACTION, goodMorningHandler);
  yield takeLatest(actions.GOOD_AFTERNOON_ACTION, goodAfternoonHandler);
  yield takeLatest(actions.GOOD_NIGHT_ACTION, goodNightHandler);
  yield takeLatest(actions.GREETING_ALL_ACTION, greetingAllHandler);
}

export default messageSaga;

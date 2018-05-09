import MessageSaga from './message.saga';
import {fork} from 'redux-saga/effects';

export default function* sagas () {
  yield fork(MessageSaga);
}

import MessageSaga from '../message.saga';
import saga from '../index.saga';
import sagaHelper from 'redux-saga-testing';
import {fork} from 'redux-saga/effects';

describe('index.saga', () => {
  const it = sagaHelper(saga());

  it('should fork MessageSaga', (result) => {
    expect(result).toEqual(fork(MessageSaga));
  });

  it('and then nothing', (result) => {
    expect(result).toBeUndefined();
  });
});

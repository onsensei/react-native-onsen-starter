import sagaHelper from 'redux-saga-testing';
import {call, put, takeLatest} from 'redux-saga/effects';
import * as actions from './../../../redux/actions/index.action';
import * as MessageSaga from '../message.saga';

describe('MessageSaga.default', () => {
  const it = sagaHelper(MessageSaga.default());

  it('should takeLatest greetingAllHandler', (result) => {
    expect(result).toEqual(takeLatest(actions.GREETING_ALL_ACTION, MessageSaga.greetingAllHandler));
  });

  it('and then nothing', (result) => {
    expect(result).toBeUndefined();
  });
});

describe('MessageSaga.greetingAllHandler', () => {
  const it = sagaHelper(MessageSaga.greetingAllHandler());

  it('should call delay', (result) => {
    expect(result).toEqual(call(MessageSaga.delay, MessageSaga.defaultDelay));
  });

  it('should put actions.goodMorningActionCreator with params', (result) => {
    // arrange
    const params = {
      message: 'Good Morning from saga',
      time: '8:00'
    };

    // assert
    expect(result).toEqual(put(actions.goodMorningActionCreator(params)));
  });

  it('should call delay', (result) => {
    expect(result).toEqual(call(MessageSaga.delay, MessageSaga.defaultDelay));
  });

  it('should put actions.goodAfternoonActionCreator with params', (result) => {
    // arrange
    const params = {
      message: 'Good Afternoon from saga',
      time: '14:00'
    };

    // assert
    expect(result).toEqual(put(actions.goodAfternoonActionCreator(params)));
  });

  it('should call delay', (result) => {
    expect(result).toEqual(call(MessageSaga.delay, MessageSaga.defaultDelay));
  });

  it('should put actions.goodNightActionCreator with params', (result) => {
    // arrange
    const params = {
      message: 'Good Night from saga',
      time: '20:00'
    };

    // assert
    expect(result).toEqual(put(actions.goodNightActionCreator(params)));
  });

  it('and then nothing', (result) => {
    expect(result).toBeUndefined();
  });
});

describe('MessageSaga', () => {
  it('delay should call setTimeout', () => {
    // arrange
    const spy = jest.spyOn(global, 'setTimeout');

    // act
    return MessageSaga.delay(MessageSaga.defaultDelay).then(() => {
      // assert
      expect(spy).toHaveBeenCalled();
    });
  });
});

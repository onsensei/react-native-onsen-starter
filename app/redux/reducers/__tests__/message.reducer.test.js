import reducer from '../message.reducer';
import * as actions from '../../actions/index.action';

describe('message.reducer', () => {
  it('GOOD_MORNING_ACTION', () => {
    // arrange
    const message = 'test message';
    const time = 'test time';
    
    const prevState = null;
    const action = {
      type: actions.GOOD_MORNING_ACTION,
      payload: {
        message: message,
        time: time
      }
    };

    // act
    const result = reducer(prevState, action);

    // assert
    expect(result).toEqual({
      lastGreetingType: actions.GOOD_MORNING_ACTION,
      message: message,
      time: time
    });
  });

  it('GOOD_AFTERNOON_ACTION', () => {
    // arrange
    const message = 'test message';
    const time = 'test time';
    
    const prevState = null;
    const action = {
      type: actions.GOOD_AFTERNOON_ACTION,
      payload: {
        message: message,
        time: time
      }
    };

    // act
    const result = reducer(prevState, action);

    // assert
    expect(result).toEqual({
      lastGreetingType: actions.GOOD_AFTERNOON_ACTION,
      message: message,
      time: time
    });
  });

  it('GOOD_NIGHT_ACTION', () => {
    // arrange
    const message = 'test message';
    const time = 'test time';
    
    const prevState = null;
    const action = {
      type: actions.GOOD_NIGHT_ACTION,
      payload: {
        message: message,
        time: time
      }
    };

    // act
    const result = reducer(prevState, action);

    // assert
    expect(result).toEqual({
      lastGreetingType: actions.GOOD_NIGHT_ACTION,
      message: message,
      time: time
    });
  });

  it('default', () => {
    // arrange
    const prevState = undefined;
    const action = {
      type: ''
    };

    // act
    const result = reducer(prevState, action);
    
    // assert
    expect(result).toEqual({});
  });
});
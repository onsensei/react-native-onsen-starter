import * as actions from '../actions/index.action';

const message = (messageState = {}, action) => {
  switch (action.type) {
  case actions.GOOD_MORNING_ACTION: {
    return {
      lastGreetingType: action.type,
      message: action.payload.message,
      time: action.payload.time
    };
  }
  case actions.GOOD_AFTERNOON_ACTION: {
    return {
      lastGreetingType: action.type,
      message: action.payload.message,
      time: action.payload.time
    };
  }
  case actions.GOOD_NIGHT_ACTION: {
    return {
      lastGreetingType: action.type,
      message: action.payload.message,
      time: action.payload.time
    };
  }
  default: return messageState;
  }
};
   
export default message;

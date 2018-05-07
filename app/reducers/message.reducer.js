const message = (messageState = '', action) => {
  switch (action.type) {
  case 'GOOD_MORNING_ACTION': {
    return {
      time: '9:00',
      message: action.payload
    };
  }
  case 'GOOD_AFTERNOON_ACTION': {
    return {
      time: '13:00',
      message: action.payload
    };
  }
  case 'GOOD_NIGHT_ACTION': {
    return {
      time: '20:00',
      message: action.payload
    };
  }
  default: return messageState;
  }
};
   
export default message;

const message = (messageState = '', action) => {
  switch (action.type) {
  case 'GOOD_MORNING_ACTION': {
    return action.payload;
  }
  case 'GOOD_AFTERNOON_ACTION': {
    return action.payload;
  }
  case 'GOOD_NIGHT_ACTION': {
    return action.payload;
  }
  default: return messageState;
  }
};
   
export default message;

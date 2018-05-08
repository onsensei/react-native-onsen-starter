import {createAction} from 'redux-actions';
 
// type
const GOOD_MORNING_ACTION = 'GOOD_MORNING_ACTION';
const GOOD_AFTERNOON_ACTION = 'GOOD_AFTERNOON_ACTION';
const GOOD_NIGHT_ACTION = 'GOOD_NIGHT_ACTION';

// action
export const greetingMorning = createAction(GOOD_MORNING_ACTION);
export const greetingAfternoon = createAction(GOOD_AFTERNOON_ACTION);
export const greetingNight = createAction(GOOD_NIGHT_ACTION);

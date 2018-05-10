import {createAction} from 'redux-actions';
 
// type
export const GOOD_MORNING_ACTION = 'GOOD_MORNING_ACTION';
export const GOOD_AFTERNOON_ACTION = 'GOOD_AFTERNOON_ACTION';
export const GOOD_NIGHT_ACTION = 'GOOD_NIGHT_ACTION';
export const GREETING_ALL_ACTION = 'GREETING_ALL_ACTION';

// action
export const goodMorningActionCreator = createAction(GOOD_MORNING_ACTION);
export const goodAfternoonActionCreator = createAction(GOOD_AFTERNOON_ACTION);
export const goodNightActionCreator = createAction(GOOD_NIGHT_ACTION);
export const greetingAllActionCreator = createAction(GREETING_ALL_ACTION);

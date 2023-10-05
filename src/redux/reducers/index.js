const {combineReducers} = require('redux');
const {peopleReducer} = require('./peopleReducer');
export const rootReducer = combineReducers({
    people: peopleReducer
});
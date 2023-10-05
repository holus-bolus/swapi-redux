import {combineReducers} from 'redux';
import {peopleReducer} from './reducers/peopleReducer';

export const rootReducer=combineReducers({
    people: peopleReducer
})
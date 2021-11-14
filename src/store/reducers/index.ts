import { combineReducers } from 'redux';
import { peopleReducer } from './peopleReducer';

export const rootReducer = combineReducers({
  people: peopleReducer,
});

export type PeopleState = ReturnType<typeof rootReducer>;

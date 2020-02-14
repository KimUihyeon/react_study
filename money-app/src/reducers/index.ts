import { category } from "./category";
import { money } from "./money";
import { ui } from './ui' ;
import { combineReducers } from 'redux';

export const reducers =  combineReducers({category,money,ui});

export type stateTypes = ReturnType<typeof reducers>;
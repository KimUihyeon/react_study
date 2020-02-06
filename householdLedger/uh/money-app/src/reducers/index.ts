import { category } from "./category";
import { money } from "./money";
import { menu } from './menu';
import { ui } from './ui' ;
import { combineReducers } from 'redux';

export const reducers =  combineReducers({category,money,menu,ui});

export type stateTypes = ReturnType<typeof reducers>;
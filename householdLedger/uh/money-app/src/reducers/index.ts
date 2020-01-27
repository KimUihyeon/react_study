import { category } from "./category";
import { money } from "./money";
import { menu } from './menu';
import { combineReducers } from 'redux';


export const reducers =  combineReducers({category,money,menu});
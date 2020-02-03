import * as actionTypes from "../actions/ActionTypes";
import { IMoney } from '../interfacies/index';

const initialState = {
    moneys : []
}

export const money = (state = initialState, action) =>{
    
    return {
        ...state , 
        moneys : state.moneys
    }
}
import * as actionTypes from "../actions/ActionTypes";
import { IMoney } from '../interfacies/index';
import { masterData }  from '../data'

const initialState = {
    moneys : masterData.moneyItems
}

export const money = (state = initialState, action) =>{
    
    return {
        ...state , 
        moneys : state.moneys
    }
}
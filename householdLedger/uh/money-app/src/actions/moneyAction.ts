import * as actionTypes from './actionTypes';
import { AnyAction } from "redux";
import { IMoney } from '../interfacies/index';


export const getList = () => {
    return {
        type : actionTypes.MONEY_SELECT,
    }
}


export const getMoneyDetail = (moneyId : number) : AnyAction =>{
    return {
        type : actionTypes.MONEY_SELECT_ONE,
        moneyId
    }
}


export const updateMoney = (money : IMoney) : AnyAction =>{
    return {
        type : actionTypes.MONEY_UPDATE,
        money 
    }
}


export const insertMoney = (money :  IMoney) : AnyAction => {
    return {
        type : actionTypes.MONEY_INSERT,
        money
    }
}

export const deleteMoney = (moneyId : number) : AnyAction  => {
    return {
        type : actionTypes.MONEY_DELETE,
        moneyId 
    }
}
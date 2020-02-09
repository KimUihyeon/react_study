import * as actionTypes from './actionTypes';
import { AnyAction } from "redux";
import { IMoney } from '../interfacies/index';


export const moneyFlagChanged = (flagName : string , flag : any) =>{
    return {
        type :actionTypes.MONEY_FlagChange,
        flagName,
        flag,
    }
}

export const createSelectMoney = () =>{
    return {
        type : actionTypes.MONEY_CREATE,
    }
}

export const getList = (task : number) => {
    console.log('task',task)
    return {
        type : actionTypes.MONEY_SELECT,
        task 
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
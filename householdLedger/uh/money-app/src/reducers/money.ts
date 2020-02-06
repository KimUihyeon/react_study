import * as actionTypes from "../actions/actionTypes";
import { IMoney } from '../interfacies/index';
import { masterData }  from '../data'
import { AnyAction } from "redux";

const initialState = {
    moneys : masterData.moneyItems
}

export const money = (state = initialState, action : AnyAction) : any =>{


    switch(action.type){
        case  actionTypes.MONEY_SELECT_ONE : {
            let moneyDetail : IMoney = state.moneys.filter(t=>t.id === action.moneyId)[0];

            return {
                ...state,
                moneyDetail
            }
        }

        case actionTypes.MONEY_SELECT : {
            return {
                ...state,
            }
        }

        case actionTypes.MONEY_INSERT : {
            console.log(action.money);
            let moneys = state.moneys.concat(action.money);
            return {
                ...state,
                moneys
            }
        }

        case actionTypes.MONEY_DELETE : { 
            let moneys = state.moneys.filter(t=>t.id !== action.id);
            return {
                ...state,
                moneys
            }
        }

        case actionTypes.MONEY_UPDATE : {
            let moneys = [...state.moneys].map((money)=>{
                if(action.money.id === money.id){
                    return {
                        ...money,
                        title : action.money.title,
                        type : action.money.type,
                        amount : action.money.amount,
                        createDate : action.money.createDate
                    }
                }
                else {
                    return money
                }
            });

            return {
                ...state,
                moneys
            }
        }

        default : {
            return {
                ...state
            }
        }
    }
    
    return {
        ...state , 
        moneys : state.moneys
    }
}
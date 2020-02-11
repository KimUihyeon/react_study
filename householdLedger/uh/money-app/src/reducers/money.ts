import * as actionTypes from "../actions/actionTypes";
import { IMoney } from '../interfacies/index';
import { masterData }  from '../data'
import { AnyAction } from "redux";

const initialState = {
    allMoneys : masterData.moneyItems,
    task : 5,
    moneys :[],
    selectedMoney: {

        id : -1,
        title : '',
        type : '지출',
        amount : 0,
        createDate : new Date()
    }
}

export const money = (state = initialState, action : AnyAction) : any =>{


    switch(action.type){
        case actionTypes.reload :{
            return {
                ...state ,
                pageIndex : action.pageIndex,
            };
        }
        case actionTypes.MONEY_FlagChange : {
            let flagName = action.flagName;

            return {
                ...state,
                selectedMoney : {
                    ...state.selectedMoney,
                    [flagName] : action.flag
                }
            }
        }

        case actionTypes.MONEY_CREATE:{

            let selectedMoney = state.selectedMoney;

            if(state.selectedMoney.id !== -1){
                let selectedMoney : IMoney = {
                    id : -1,
                    title : '',
                    type : '지출',
                    amount : 0,
                    category : '' ,
                    paymentType : null ,
                    createDate : new Date()
                }
                return {
                    ...state,
                    selectedMoney
                }
            }

            return {
                ...state
            }
            
        }
        case  actionTypes.MONEY_SELECT_ONE : {
            let moneyDetail : IMoney = state.allMoneys.filter(t=>t.id === action.moneyId)[0];

            return {
                ...state,
                moneyDetail
            }
        }

        case actionTypes.MONEY_SELECT : {
            let moneys = [...state.allMoneys].sort((a,b)=>a.createDate < b.createDate ? -1 : 0 ).splice(0,state.task);

            return {
                ...state,
                task : state.task+5,
                moneys
            }
        }

        case actionTypes.MONEY_INSERT : {
            console.log(action.money);
            let pk = Math.max(...state.allMoneys.map(t=>t.id)) +1;
            let money = {
                ...action.money,
                id: pk
            }
            let allMoneys = state.allMoneys.concat(money);
            return {
                ...state,
                selectedMoney: money,
                allMoneys,
            }
        }

        case actionTypes.MONEY_DELETE : { 
            let allMoneys = state.allMoneys.filter(t=>t.id !== action.id);
            return {
                ...state,
                allMoneys
            }
        }

        case actionTypes.MONEY_UPDATE : {
            let allMoneys = [...state.allMoneys].map((money)=>{
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
                allMoneys
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
        moneys : state.allMoneys
    }
}
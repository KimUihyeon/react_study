import * as actionTypes from "../actions/ActionTypes";
import {  } from "../actions/index";


const initialState = {
    categories : [],
}



export const category = (state : any = initialState, action : any) : object =>{
    console.log(action.category);
    switch(action.type){
        case actionTypes.CTG_INSERT : {
            return {
                ...state,
                categories : state.categories.concat(action.category)
            }
        }
        default :{
            return{
                ...state
            }
        }
    }



    return {

    }
}
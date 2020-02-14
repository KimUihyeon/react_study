import * as actionTypes from "../actions/actionTypes";


const initialState = {
    categories : [],
}

export const category = (state : any = initialState, action : any) : object =>{
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
}
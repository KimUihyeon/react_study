import * as actionTypes from "./ActionTypes";
import { AnyAction } from "redux";



export const categori_insert = (category) : AnyAction => {
    return {
        type : actionTypes.CTG_INSERT,
        category
    }
}

export const categori_update = (category) : AnyAction =>{
    return {
        type : actionTypes.CTG_UPDATE,
        category
    }

}

export const categori_delete = (category) : AnyAction =>{
    return {
        type : actionTypes.CTG_DELETE,
        category
    }

}

export const categori_selete = (category) : AnyAction =>{
    return {
        type : actionTypes.CTG_SELECT,
        category
    }

}
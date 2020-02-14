import * as actionTypes from "./actionTypes";
import { AnyAction } from "redux";
import { ICategory } from '../interfacies/index'



export const categori_insert = (category : ICategory) : AnyAction => {
    return {
        type : actionTypes.CTG_INSERT,
        category
    }
}

export const categori_update = (category : ICategory) : AnyAction =>{
    return {
        type : actionTypes.CTG_UPDATE,
        category
    }

}

export const categori_delete = (category : ICategory) : AnyAction =>{
    return {
        type : actionTypes.CTG_DELETE,
        category
    }

}

export const categori_selete = (category : ICategory) : AnyAction =>{
    return {
        type : actionTypes.CTG_SELECT,
        category
    }

}
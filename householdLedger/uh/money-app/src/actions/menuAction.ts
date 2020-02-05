import * as actionTypes from "./actionTypes";
import { AnyAction } from "redux";
import { IMenuItem } from '../interfacies'


export const MenuClick = ( menuItem : IMenuItem) : AnyAction => {
    return {
        type : actionTypes.MENU_CLICK,
        menuItem
    }
}
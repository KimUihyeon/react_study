import * as actionTypes from './actionTypes'
import { AnyAction } from 'redux';


export const ui_animation = () : AnyAction =>{
    return {
        type : actionTypes.UI_ANIMATION,
    }
}


export const ui_modal_switch = (isModalOpen : boolean) : AnyAction =>{
    return {
        type : actionTypes.UI_ANIMATION,
        regModal : isModalOpen
    }
}



export const ui_menu_switch = ( isMenuOpen : boolean) : AnyAction => {
    return {
        type : actionTypes.UI_MENU_SWITCH,
        isMenuOpen
    }
}
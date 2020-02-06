import * as actionTypes from './actionTypes'


export const ui_animation = ()=> {
    return {
        type : actionTypes.UI_ANIMATION,
    }
}


export const ui_modal_switch = (isModalOpen : boolean)=>{
    return {
        type : actionTypes.UI_ANIMATION,
        regModal : isModalOpen
    }
}



import * as actionTypes from '../actions/actionTypes';
import { masterData } from '../data';
import { SWITCH } from '@blueprintjs/core/lib/esm/common/classes';

const initailState = {
    menu : {
        isMenuOpen : false,
        items : masterData.menuItems,
    },
    isOpenRegModal : false,
}

export const ui = ( state = initailState , action : any  ) : any =>{

    switch(action.type){
        case actionTypes.UI_REG_MODAL_SWITCH :{
            return {
                ...state,
                isOpenRegModal : action.isOpenRegModal
            }
        }
        case actionTypes.UI_MODAL_SWITCH : {
            return {
                ...state,
                regModal : action.regModal
            }
        }

        case actionTypes.UI_MENU_SWITCH : {

            return {
                ...state,
                menu : {
                    ...state.menu,
                    isMenuOpen : action.isMenuOpen
                }
            }
        }
        defualt : {
            return {
                ... state
            }
        }

    }
    return {
        ... state
    }

}
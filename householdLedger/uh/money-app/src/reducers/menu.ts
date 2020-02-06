import * as actionTypes from '../actions/actionTypes';
import { masterData } from '../data';

const initialState = {
    menuItems : masterData.menuItems
}

export const menu = (state : any  = initialState, action : any ) : any =>{

    switch(action.type){
        case actionTypes.UI_MENU_SWITCH : {
            let cloneMenuItems = [...state.menuItems].map((menu)=>{
                menu.active = false;
                if(menu.id === action.menuItem.id){
                    menu.active = true;
                }
                return menu;    
            });
            return {
                ...state,
                menuItems : cloneMenuItems
            }
        }
        default : {
            return state
        }

    }
}
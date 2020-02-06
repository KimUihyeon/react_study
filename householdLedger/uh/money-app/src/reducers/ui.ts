import * as actionTypes from '../actions/actionTypes';
import { masterData } from '../data';
import { SWITCH } from '@blueprintjs/core/lib/esm/common/classes';

const initailState = {
    test : true,
    regModal : false,
}

export const ui = ( state = initailState , action : any  ) : any =>{

    switch(action.type){
        case actionTypes.UI_ANIMATION : {
            return {
                ...state,
                regModal : action.regModal
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
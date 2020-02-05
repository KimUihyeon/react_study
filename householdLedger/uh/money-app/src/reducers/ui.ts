import * as ActionTypes from '../actions/actionTypes';
import { masterData } from '../data';

const initailState = {
    test : true
}

export const ui = ( state = initailState , action : any  ) : any =>{

    return {
        ... state
    }
}
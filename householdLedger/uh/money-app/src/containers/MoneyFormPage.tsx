import React from "react";
import { connect } from 'react-redux'
import { MoneyForm } from '../components/MoneyForm'
import { stateTypes } from '../reducers'
import * as actions from '../actions'
import { IMoney } from "../interfacies";


interface Props {
    isModal : boolean,
    handleClick_close : any,
    handleClick_open : any,
    handleClick_save : any,
}


function MoneyFormPage ({isModal, handleClick_close, handleClick_open, handleClick_save} : Props) {

    let money : IMoney = {
        id : -1,
        title : 'title',
        type : '지출',
        amount: 0,
        createDate : new Date(),
    }

    return (
        <div>
            <MoneyForm isModal={isModal} 
                money={money}
                handleClick_save={handleClick_save}
                handleClick_close={handleClick_close}
                handleClick_open={handleClick_open}
            />
        </div>
    )
}


let mapStateToProps = (state : stateTypes) =>{
    return {
        isModal : state.ui.regModal
    }
}

let mapDispatchToProps = (dispatch : any) =>{
    return {
        handleClick_save : (money : IMoney) => {
            dispatch(actions.MoneyAction.insertMoney(money));
            dispatch(actions.UIAction.ui_modal_switch(false));
        },
        handleClick_close : ()=> {dispatch(actions.UIAction.ui_modal_switch(false)) },
        handleClick_open : ()=> {dispatch(actions.UIAction.ui_modal_switch(true)) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MoneyFormPage);

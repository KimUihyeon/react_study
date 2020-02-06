import React from "react";
import { MoneyList } from '../components/MoneyList'
import { connect } from 'react-redux';
import { stateTypes } from '../reducers'
import { IMoney } from '../interfacies/index'

interface Props {
    moneys : IMoney[],
    handleClick : any,
}

function MoneyListPage ({ moneys, handleClick } : Props) {
    return (
        <div>
            <MoneyList 
                moneys={moneys}
                handleClick={handleClick}/>
        </div>
    )
}


let mapStateToProps = (state : stateTypes) => {
    return {
        moneys : state.money.moneys
    }
}

let mapDispatchToProps = (dispatch : any) => {
    return {
        handleClick : () => { console.log('t') }
    }
}


export  default connect(mapStateToProps, mapDispatchToProps)(MoneyListPage);
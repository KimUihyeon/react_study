import React from "react";
import { MoneyList } from '../components/MoneyList'
import { connect } from 'react-redux';
import { stateTypes } from '../reducers'
import { IMoney, ICard } from '../interfacies/index'
import searchPramFactory from '../data/searchPramFactory'
import { CardList } from "../components/CardList";

interface Props {
    moneys : IMoney[],
    handleClick : any,
    match : any
}


function MoneyListPage ({ moneys, handleClick , match } : Props) {
    let searchParam = searchPramFactory(match.params);

    let cards :ICard[] = [
        {id : -1, cardNumber: [1,2,3,4], bankName:''},
        {id : 1, cardNumber: [1,2,3,4], bankName:''},
        {id : 2, cardNumber: [1,2,3,4], bankName:''}
    ]
    
    return (
        <div>
            <div>
                <CardList cards={cards}></CardList>
            </div>
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
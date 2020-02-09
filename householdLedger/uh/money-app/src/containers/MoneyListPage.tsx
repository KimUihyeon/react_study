import React, { useEffect } from "react";
import { MoneyList } from '../components/MoneyList'
import { connect } from 'react-redux';
import { stateTypes } from '../reducers'
import { IMoney, ICard, IPayment } from '../interfacies/index'
import searchPramFactory from '../data/searchPramFactory'
import { CardList } from "../components/CardList";
import { Slider, Spinner, Intent } from "@blueprintjs/core";
import * as actions from "../actions/index";
import { PaymentMaster } from '../data/master'

interface Props {
    moneys : IMoney[],
    handleClick : any,
    nextMoneyTake : any,
    match : any,
    task : number
}


function MoneyListPage ({ moneys, handleClick , match , nextMoneyTake, task} : Props) {

    if(moneys.length === 0 ){
        nextMoneyTake();
    }

    let searchParam = searchPramFactory(match.params);

    let payments = PaymentMaster();
    
    useEffect(function() {
        window.addEventListener('scroll', handle);
        
        return function cleanup() {
            window.addEventListener('scroll', handle);
        }
      }, []);

    const handle = () =>{
        const { innerHeight } = window
        const { scrollHeight } = document.body
    
        const scrolltop =
            (document.documentElement && document.documentElement.scrollTop) 
                || document.body.scrollTop;
    
        if (scrollHeight - innerHeight - scrolltop < 0) {
            setTimeout(() => {
                nextMoneyTake();
            }, 500);
        }
    }
    
    return (
        <div>
            <div>
                <CardList payments={payments}></CardList>
            </div>
            <MoneyList 
                moneys={moneys}
                handleClick={handleClick}/>
            <div style={{padding:15}}> 
            </div>
        </div>
    )
}


let mapStateToProps = (state : stateTypes) => {
    return {
        moneys : state.money.moneys,
        task : state.money.task
    }
}

let mapDispatchToProps = (dispatch : any) => {
    return {
        handleClick : () => { console.log('t') },
        nextMoneyTake : () =>{dispatch(actions.MoneyAction.getList())}
    }
}



export  default connect(mapStateToProps, mapDispatchToProps)(MoneyListPage);
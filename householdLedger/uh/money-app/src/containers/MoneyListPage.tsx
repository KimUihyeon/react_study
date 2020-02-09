import React, { useEffect } from "react";
import { MoneyList } from '../components/MoneyList'
import { connect } from 'react-redux';
import { stateTypes } from '../reducers'
import { IMoney, ICard } from '../interfacies/index'
import searchPramFactory from '../data/searchPramFactory'
import { CardList } from "../components/CardList";
import { Slider, Spinner, Intent } from "@blueprintjs/core";
import * as actions from "../actions/index";

interface Props {
    moneys : IMoney[],
    handleClick : any,
    taskMoneys : any,
    match : any,
    task : number
}


function MoneyListPage ({ moneys, handleClick , match , taskMoneys, task} : Props) {

    let searchParam = searchPramFactory(match.params);

    console.log(task);


    let cards :ICard[] = [
        {id : -1, cardNumber: [1,2,3,4], bankName:''},
        {id : 1, cardNumber: [1,2,3,4], bankName:''},
        {id : 2, cardNumber: [1,2,3,4], bankName:''}
    ]
    
    useEffect(function() {
        console.log('몇번튀심?')
        window.addEventListener('scroll', handle);
        
        return function cleanup() {
            window.addEventListener('scroll', handle);
        }
      }, []);

    const handle = () =>{
        let startTask = 5;
        const { innerHeight } = window
        const { scrollHeight } = document.body
    
        const scrolltop =
            (document.documentElement && document.documentElement.scrollTop) 
                || document.body.scrollTop;
    
        if (scrollHeight - innerHeight - scrolltop < 0) {
            let nextConst = task+5;
            taskMoneys( startTask);
            startTask += 5;
            console.log(' startTask' , startTask);
        }
    }
    
    return (
        <div>
            <div>
                <CardList cards={cards}></CardList>
            </div>
            <MoneyList 
                moneys={moneys}
                task={task}
                taskMoneys={taskMoneys}
                handleClick={handleClick}/>
            <div style={{padding:15}}> 
             <Spinner
                intent={Intent.PRIMARY}
                size={35} 
                 />
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
        taskMoneys : (task : number) =>{dispatch(actions.MoneyAction.getList(task))}
    }
}



export  default connect(mapStateToProps, mapDispatchToProps)(MoneyListPage);
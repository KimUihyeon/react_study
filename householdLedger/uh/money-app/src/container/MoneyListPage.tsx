import React from "react";
import { List as MoneyList} from '../components/money/List'
import { connect } from 'react-redux';
import { IMoney } from '../interfacies/index'

interface Props {
    moneys : IMoney[],
    handleClick : any,
}

const MoneyListPage : React.FC<Props>  = ({ moneys, handleClick } : Props)  =>{
    return (
        <div>
            <MoneyList 
                moneys={moneys}
                handleClick={handleClick}/>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        moneys : state.money.moneys
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}


export  default connect(mapStateToProps, mapDispatchToProps)(MoneyListPage);
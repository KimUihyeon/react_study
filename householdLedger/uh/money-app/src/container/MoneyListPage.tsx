import React from "react";
import { List as MoneyList} from '../components/money/List'
import { connect } from 'react-redux';

const MoneyListPage : React.FC  = ()  =>{
    return (
        <div>
            MoneyListPage
        </div>
    )
}




export  default connect()(MoneyListPage);
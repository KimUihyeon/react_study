import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MoneyListPage } from './MoneyListPage'


const Body = () : React.FC=>{
    return(
        <div>
            <Route path='/main' component={MoneyListPage} />
        </div>
    )
}

export default Body;
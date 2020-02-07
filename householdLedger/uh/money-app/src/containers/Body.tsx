import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MoneyListPage from './MoneyListPage'
import MoneyFormPage from './MoneyFormPage'
import MoneySumPage from './MoneySumPage'
import { SettingPage } from './SettingPage'


function Body(){
    return(
        <div>
            <Route path='/' component={MoneySumPage} />
            <Route path='/main' component={MoneySumPage} />
            <Route path='/form' component={MoneyFormPage} />
            <Route path='/card/:type' component={MoneyListPage} />
            <Route path='/setting' component={SettingPage} />
        </div>
    )
}

export default Body;
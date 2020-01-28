import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MoneyListPage from './MoneyListPage'
import MoneyFormPage from './MoneyFormPage'
import { SettingPage } from './SettingPage'


const Body : React.FC = () =>{
    return(
        <div>
            <Route path='/main' component={MoneyListPage} />
            <Route path='/form' component={MoneyFormPage} />
            <Route path='/setting' component={SettingPage} />
        </div>
    )
}

export default Body;
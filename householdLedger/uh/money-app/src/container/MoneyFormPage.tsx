import React from "react";
import { connect } from 'react-redux'
import { Form as MoneyForm } from '../components/money/Form'
import { stateTypes } from '../reducers'


interface Props {

}


function MoneyFormPage (props : Props) {
    return (
        <div>
            <MoneyForm>
            </MoneyForm>
        </div>
    )
}


let mapStateToProps = (state : stateTypes) =>{
    return {

    }
}

let mapDispatchToProps = (dispatch : any) =>{
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MoneyFormPage);

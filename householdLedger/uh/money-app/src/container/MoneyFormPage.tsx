import React from "react";
import { connect } from 'react-redux'
import { Form as MoneyForm } from '../components/money/Form'


interface Props {

}

const MoneyFormPage : React.FC<Props> = (props :  Props) =>{
    return (
        <div>
            <MoneyForm>
            </MoneyForm>
        </div>
    )
}


let mapStateToProps = (state) =>{
    return {

    }
}

let mapDispatchToProps = (dispatch) =>{
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MoneyFormPage);

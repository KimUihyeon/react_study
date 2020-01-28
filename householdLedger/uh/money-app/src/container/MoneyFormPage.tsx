import React from "react";
import { connect } from 'react-redux'


interface Props {

}

const MoneyFormPage : React.FC<Props> = (props :  Props) =>{
    return (
        <div>
            moneyForm
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

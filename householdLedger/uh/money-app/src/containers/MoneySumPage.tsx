import React from "react";
import { stateTypes } from '../reducers'
import { connect } from 'react-redux';
import { MoneySummaryGraph }  from '../components/MoneySummaryGraph'
import { Divider , ButtonGroup } from '@blueprintjs/core'


interface Props { 

}


function MoneySumPage ({ } : Props) {
    return (
        <div>
            <MoneySummaryGraph title={'test'}/>
            <ButtonGroup vertical={true} className="widthFull">
                <Divider />
                <ButtonGroup vertical={false} className="widthFull height50 flexBox-col">
                    <div>일일평균</div>
                    <Divider />
                    <div>주간평균</div>
                    <Divider />
                    <div>가장많은항목</div>
                </ButtonGroup>
            </ButtonGroup>

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

export default connect(mapStateToProps, )(MoneySumPage);
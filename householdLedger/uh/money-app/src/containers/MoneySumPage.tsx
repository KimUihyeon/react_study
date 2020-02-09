import React from "react";
import { stateTypes } from '../reducers'
import { IconButton } from '../components/IconButton'
import { connect } from 'react-redux';
import { MoneySummaryGraph }  from '../components/MoneySummaryGraph'
import { Divider , ButtonGroup } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import { UrlParams } from '../data/enums'
import { util } from '../data/util'
import { IMoney } from "../interfacies";

interface Props { 
    allMoneyData : IMoney[]   
}


function MoneySumPage ({ allMoneyData } : Props) {

    const todaySum = 140000;
    const weekSum = 10000;
    const monthSum = 160000;
    const goalMoney = 560000;

    const size = 20;

    return (
        <div>
            <MoneySummaryGraph 
                title={'이번달 절약목표'}
                usedMoney={monthSum}
                goal={goalMoney}/>
            <ButtonGroup vertical={true} className="widthFull">
                <Divider />
                <ButtonGroup vertical={false} className="widthFull height50 flexBox-col">
                    <IconButton
                        iconSize={size}
                        title={'오늘의 지출'} 
                        contents={`${util.toMoneyFormat(todaySum)}원`}
                        href={`/card/${UrlParams[UrlParams.month]}`}
                        icon={IconNames.MUGSHOT}/>
                    <Divider />
                    <IconButton 
                        iconSize={size}
                        title={'이번주 지출'} 
                        contents={`${util.toMoneyFormat(weekSum)}원`}
                        href={`/card/${UrlParams[UrlParams.today]}`}
                        icon={IconNames.CALENDAR}/>
                    <Divider />
                    <IconButton 
                        iconSize={size}
                        title={'Best 항목'} 
                        contents={'주유비'}
                        href={'/main/'}
                        icon={IconNames.SCATTER_PLOT}/>
                </ButtonGroup>
            </ButtonGroup>

        </div>
    )
}


let mapStateToProps = (state : stateTypes) =>{
    return {
        allMoneyData : state.money.allMoneys

    }
}


let mapDispatchToProps = (dispatch : any) =>{
    return {

    }
}

export default connect(mapStateToProps, )(MoneySumPage);
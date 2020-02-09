import React from "react";
import { stateTypes } from '../reducers'
import { IconButton } from '../components/IconButton'
import { connect } from 'react-redux';
import { MoneySummaryGraph }  from '../components/MoneySummaryGraph'
import { Divider , ButtonGroup } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import { UrlParams } from '../data/enums'


interface Props { 

}


function MoneySumPage ({ } : Props) {
    const size = 20;

    return (
        <div>
            <MoneySummaryGraph title={'test'}/>
            <ButtonGroup vertical={true} className="widthFull">
                <Divider />
                <ButtonGroup vertical={false} className="widthFull height50 flexBox-col">
                    <IconButton
                        iconSize={size}
                        title={'오늘의 지출'} 
                        contents={'100000'}
                        href={`/card/${UrlParams[UrlParams.month]}`}
                        icon={IconNames.MUGSHOT}/>
                    <Divider />
                    <IconButton 
                        iconSize={size}
                        title={'이번주 지출'} 
                        contents={'100000'}
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

    }
}


let mapDispatchToProps = (dispatch : any) =>{
    return {

    }
}

export default connect(mapStateToProps, )(MoneySumPage);
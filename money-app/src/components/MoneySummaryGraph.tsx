
import React from 'react';
import { H5, Intent, Label, Slider, Spinner, Switch, H1, H2 } from "@blueprintjs/core";
import { util } from '../data/util';

interface Props{
    title : string ,
    usedMoney : number,
    goal : number,
}

export function MoneySummaryGraph( { title , usedMoney, goal } : Props  ) { 


    return (
        <div>
            <div style={{marginTop:50 , marginBottom:50, position:"relative"}}>
                <Spinner
                    intent={Intent.PRIMARY} 
                    size={320}
                    value={usedMoney/goal}>
                </Spinner>
                <div style={{textAlign:"center", position:"absolute" , top:120, width:'100%'}} >
                    <H5>{title}</H5>
                    <H2>{util.toMoneyFormat(usedMoney)}원<span style={{fontSize:12}}>/{util.toMoneyFormat(goal)}원</span></H2>
                    
                </div>
            </div>
        </div>
    )
}
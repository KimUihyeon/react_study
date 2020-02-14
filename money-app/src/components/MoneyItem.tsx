import React from 'react';
import { IMoney } from '../interfacies/index'
import { Card, H3, Tag, H6 } from '@blueprintjs/core'
import { util }  from '../data/util'

interface Props {
    money : IMoney,
    handleClick : any
}

export function MoneyItem ({ money , handleClick } :Props) {

    let plusMinus = money.type === '지출' ?  '-' : '';
    let amount = `${plusMinus}${util.toMoneyFormat(money.amount)}`;
    
    console.log(money.paymentType);
    
    return (
        <div style={{margin:5}}>
            <Card style={{textAlign:"right" }}>
                <H3>
                    <span style={{float:"left"}}>{money.title}</span>
                    <span>{amount}</span>
                </H3>
                <H3>
                    <span style={{float:'left', fontSize:14}}>{money.paymentType?.bankName}</span>
                    <span style={{fontSize:12}}>{money.createDate.toISOString().substring(0, 10)}</span>
                </H3>
                <div>
                    <Tag style={{margin:3}} intent={money.type === '지출' ? 'danger' : 'success'}>
                        {money.type}
                    </Tag>
                    <Tag style={{margin:3}}>{money.category}</Tag>
                </div>
            </Card>
        </div>
    );
}
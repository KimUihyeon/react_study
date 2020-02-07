import React from 'react';
import { IMoney } from '../interfacies/index'
import { Card, H3, Tag, H5, H6 } from '@blueprintjs/core'
import { util }  from '../data/util'

interface Props {
    money : IMoney,
    handleClick : any
}

export function MoneyItem ({ money , handleClick } :Props) {

    let plusMinus = money.type === '지출' ?  '-' : '';
    let amount = `${plusMinus}${util.toMoneyFormat(money.amount)}`;
    
    return (
        <div>
            <Card style={{textAlign:"right" }}>
                <H3><Tag>{'지출'}</Tag>{money.title}<span style={{fontSize:11}}>{money.createDate.toISOString().substring(0, 10)}</span></H3>
                <H6></H6>
                <div>
                    <Tag>{'교통비'}</Tag>
                </div>
                <div>{amount}</div>
            </Card>
        </div>
    );
}
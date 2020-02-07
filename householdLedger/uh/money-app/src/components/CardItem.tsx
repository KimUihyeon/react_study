import React from 'react';
import { ICard } from '../interfacies';
import { Card, H1, H4 , Divider, H6, Classes } from '@blueprintjs/core'

interface Props{
    card : ICard
}

export function CardItem ({card} : Props) { 
    return (
        <div style={{margin:10, width:250, padding:15}}>
            <Card style={{borderRadius:10}} elevation={3}>
                <p><span className='icon_woori'></span>우리 신용카드</p>
                <H4>12**-****-****-**34</H4>
                <Divider></Divider>
                <H6>11/20 (MM/YY)</H6>
            </Card>
        </div>
    )
}

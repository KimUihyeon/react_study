import React from 'react';
import { ICard, IPayment } from '../interfacies';
import { Card, H1, H4 , Divider, H6, Classes, H5 } from '@blueprintjs/core'

interface Props{
    payment : IPayment
}

export function CardItem ({payment} : Props) { 


    let cardNumber : string =  payment.cardNumber.join('-');
    return (
        <div style={{margin:10, width:250, padding:15}}>
            <Card style={{borderRadius:10}} elevation={3}>
                <p><span className='icon_woori'></span>{payment.bankName}</p>
                <H5>{
                        payment.id > 0 ?
                        payment.cardNumber[0]+'-****-****-'+payment.cardNumber[3] : 
                        '-'
                    }</H5>
                <Divider></Divider>
                <H6>{
                        payment.id > 0 ?
                        '11/20 (MM/YY)' : 
                        '-'
                    }</H6>
            </Card>
        </div>
    )
}

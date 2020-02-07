import React from 'react';
import { ICard } from '../interfacies';
import { Card, H1 } from '@blueprintjs/core'

interface Props{
    card : ICard
}

export function CardItem ({card} : Props) { 
    return (
        <div>
            <Card>
                <H1>{card.cardNumber}</H1>
            </Card>
        </div>
    )
}

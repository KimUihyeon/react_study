import React from 'react';
import { ICard } from '../interfacies/index'
import { CardItem } from './CardItem'


interface Props {
    cards : ICard[]
}

export function CardList ( {cards} : Props){

    const cardIComponents = cards.map(card=> {
        return (
            <CardItem key={card.id} card={card}></CardItem>
        )
    })

    return (
        <div>
            {cardIComponents}
        </div>
    )
}


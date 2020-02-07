import React from 'react';
import { ICard } from '../interfacies/index'
import { CardItem } from './CardItem'
import Slider from "react-slick";
import { Button } from '@blueprintjs/core';


interface Props {
    cards : ICard[]
}

export function CardList ( {cards} : Props){

    const cardIComponents = cards.map(card=> {
        return (
            <CardItem key={card.id} card={card}></CardItem>
        )
    })

    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows:false,
        variableWidth:true,
        adaptiveHeight:true
      };

    return (
        <div>
            <div style={{paddingBottom:30}}>
                <Slider
                    {...settings}>
                    {cardIComponents}
                </Slider>
            </div>
        </div>
    )
}


import React from 'react';
import { ICard, IPayment } from '../interfacies/index'
import { CardItem } from './CardItem'
import Slider from "react-slick";
import { Button } from '@blueprintjs/core';


interface Props {
    payments : IPayment[]
}

export function CardList ({payments} : Props){

    const cardIComponents = payments.map(payment=> {
        return (
            <CardItem key={payment.id} payment={payment}></CardItem>
        )
    })

    const cardIdToSlideIdMapping = payments.map((pyment,i)=>{
        return {
            ...pyment,
            slide:i
        }
    });

    const handleSlideChange = (beforeNumber : number ,afterNumber : number) =>{
        let data = cardIdToSlideIdMapping.filter(t=>t.slide===afterNumber)[0];
        console.log(data.bankName); 
    }

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
                    beforeChange={(b,a)=>{handleSlideChange(b,a)}}
                    {...settings}>
                    {cardIComponents}
                </Slider>
            </div>
        </div>
    )
}


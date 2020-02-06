
import React from 'react';
import { H5, Intent, Label, Slider, Spinner, Switch } from "@blueprintjs/core";

interface Props{
    title : string ,
}

export function MoneySummaryGraph( { title } : Props  ) { 
    return (
        <div>
            <div style={{marginTop:50 , marginBottom:50, position:"relative"}}>
                <Spinner
                    intent={Intent.PRIMARY} 
                    size={320}
                    value={0.5}>
                </Spinner>
                <div style={{textAlign:"center", position:"absolute" , top:150, width:'100%'}} >
                    {title}
                </div>
            </div>
        </div>
    )
}
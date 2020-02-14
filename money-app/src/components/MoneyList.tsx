import React , { useEffect } from "react";
import { MoneyItem } from './MoneyItem';
import { IMoney } from '../interfacies/index'
import { Cell, Column, Table } from "@blueprintjs/table";

interface Props {
    moneys : IMoney[];
    handleClick : any,
}

export function MoneyList ({moneys , handleClick} : Props) {

    
    return (
        <div>
            { moneys.length === 0  ?
                <div></div> : moneys.map(d=>
                    <MoneyItem key={d.id} money={d} handleClick={handleClick}/>
                )
            }
        </div>
    )
}
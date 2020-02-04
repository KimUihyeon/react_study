import React from "react";
import { Item as MoneyItem } from './Item';
import { IMoney } from '../../interfacies/index'

interface Props {
    moneys : IMoney[];
    handleClick : any
}

export const List : React.FC<Props> = ({moneys , handleClick} : Props) => {
    
    let collectionToComponenet = moneys.map(d=>
            <MoneyItem key={d.id} money={d} handleClick={handleClick}/>
        );

    return (
        <div>
            {collectionToComponenet}
        </div>
    )
}
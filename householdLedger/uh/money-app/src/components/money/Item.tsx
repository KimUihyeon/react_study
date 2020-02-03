import React from 'react';
import { IMoney } from '../../interfacies/index'

interface Props {
    money : IMoney,
    handleClick : any
}

export const Item : React.FC<Props> = ({ money , handleClick} :Props) =>{
    return (
        <div>
            Item.
        </div>
    );
}
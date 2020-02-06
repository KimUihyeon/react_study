import React from 'react';
import { IMoney } from '../interfacies/index'

interface Props {
    money : IMoney,
    handleClick : any
}

export function MoneyItem ({ money , handleClick } :Props) {
    return (
        <div>
            <div>
                {money.title} //
                {money.createDate.toISOString().substring(0, 10)}
            </div>
        </div>
    );
}
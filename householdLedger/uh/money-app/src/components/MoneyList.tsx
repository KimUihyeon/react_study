import React from "react";
import { MoneyItem } from './MoneyItem';
import { IMoney } from '../interfacies/index'
import { Cell, Column, Table } from "@blueprintjs/table";

interface Props {
    moneys : IMoney[];
    handleClick : any
}

export function MoneyList ({moneys , handleClick} : Props) {

    moneys.sort((a,b)=> a.amount - b.amount < 0 ? -1 : 0);

    let collectionToComponenet = moneys.map(d=>
        <MoneyItem key={d.id} money={d} handleClick={handleClick}/>
    );
    let collectionToExcelComponent = (
        <Table numRows={moneys.length}>
            <Column name="항목명" cellRenderer={(row)=>(<Cell>{moneys[row].title}</Cell>)}/>
            <Column name="타입" cellRenderer={(row)=>(<Cell>{moneys[row].type}</Cell>)}/>
            <Column name="발생금액" cellRenderer={(row)=>(<Cell>{moneys[row].amount}</Cell>)}/>
        </Table>
    );

    return (
        <div>
            {collectionToComponenet}
        </div>
    )
}
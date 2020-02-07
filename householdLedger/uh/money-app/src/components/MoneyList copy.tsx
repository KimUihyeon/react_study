import React from "react";
import { MoneyItem } from './MoneyItem';
import { IMoney } from '../interfacies/index'
import { Cell, Column, Table } from "@blueprintjs/table";
import { Example , IExampleProps} from "@blueprintjs/docs-theme";

interface Props {
    moneys : IMoney[];
    handleClick : any
}

export function MoneyList ({moneys , handleClick} : Props) {
        
    const cellRenderer = (rowIndex: number) => {
        return <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
    };

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
            {collectionToExcelComponent}
        </div>
    )
}
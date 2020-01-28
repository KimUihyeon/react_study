import React from "react";
import { IMenuItem }from '../../interfacies';
import { MenuItem } from './MenuItem'

interface Props {
    menuItems : IMenuItem[],
    handleItemClick : any
}

export const Menu : React.FC<Props> = (props)=> {
    let mapToComponent = props.menuItems.map((data)=>{
        return (
            <MenuItem key={data.id} menuItem={data} 
                    handleClick={props.handleItemClick}/>
        )
    })

    return (
        <div className='menu'>
            {mapToComponent}
        </div>
    )
}

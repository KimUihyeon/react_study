import React from "react";
import { IMenuItem }from '../../interfacies';
import { MenuItem } from './MenuItem'

interface Props {
    menuItems : IMenuItem[],
    handleItemClick : any
}


export function Menu ({ menuItems, handleItemClick} :Props)  {
    
    let mapToComponent = menuItems.map((data)=>{
        return (
            <MenuItem key={data.id} menuItem={data} 
                    handleClick={handleItemClick}/>
        )
    })

    return (
        <div className='menu'>
            {mapToComponent}
        </div>
    )
}

import React from "react";
import { IMenuItem }from '../../interfacies'

interface MenuProps {
    menuItems : IMenuItem[],
    handleItemClick : any
}

export const Menu = (props : MenuProps) : React.FC => {
    let mapToComponent = props.menuItems.map((data)=>{
        return (
            <MenuItem key={data.id} menuItem={data} 
                    handleClick={props.handleItemClick}/>
        )
    })

    return (
        <div>
            {mapToComponent}
        </div>
    )
}


/* --------------------------------------- */ 

interface MenuItemProps {
    menuItem : IMenuItem,
    handleClick : any,
}

const MenuItem = (props : MenuItemProps) : React.FC => {

    let activeStyle = props.menuItem.active ? 'active' : '';
    if(props.menuItem.active === true ){
        
        console.log(`${props.menuItem.name} 활성화`)
    }

    return (
        <span>
            <div onClick={() =>{props.handleClick(props.menuItem)}} >
                {props.menuItem.icon}
                {props.menuItem.name}
            </div>
        </span>
    )
}
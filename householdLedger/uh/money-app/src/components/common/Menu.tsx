import React from "react";
import { IMenuItem }from '../../interfacies';
import { Link } from "react-router-dom";

interface MenuProps {
    menuItems : IMenuItem[],
    handleItemClick : any
}

export const Menu = (props : MenuProps) : React.FC<{}> => {
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

const MenuItem = (props : MenuItemProps) : React.FC<{}> => {

    let activeStyle = props.menuItem.active ? 'menuActive menuItem' : 'menuItem';

    return (
        <span>
            <div className={activeStyle} onClick={() =>{props.handleClick(props.menuItem)}} >
                <Link to={props.menuItem.url}>
                    {props.menuItem.icon}
                    {props.menuItem.name}
                </Link>
            </div>
        </span>
    )
}
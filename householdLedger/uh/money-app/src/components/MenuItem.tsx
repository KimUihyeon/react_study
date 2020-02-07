import React from "react";
import { IMenuItem }from '../interfacies';
import { Link } from "react-router-dom";
import { Icon } from "@blueprintjs/core";


interface Props {
    menuItem : IMenuItem,
    handleClick : any,
}

export function MenuItem ({ menuItem, handleClick } : Props) {

    let activeStyle = menuItem.active ? 'menuActive cursor-pointer ' : 'cursor-pointer';

    return (
        <div>
            <Link to={menuItem.url} className='a-block'>
                <div className={activeStyle} onClick={() =>{handleClick(menuItem)}} >
                    <Icon icon={"add"} iconSize={30}></Icon>
                    <span className='title'>{menuItem.name}</span>
                </div>
            </Link>
        </div>
    )
}
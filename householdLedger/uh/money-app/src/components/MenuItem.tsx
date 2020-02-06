import React from "react";
import { IMenuItem }from '../interfacies';
import { Link } from "react-router-dom";


interface Props {
    menuItem : IMenuItem,
    handleClick : any,
}

export function MenuItem ({ menuItem, handleClick } : Props) {

    let activeStyle = menuItem.active ? 'menuActive cursor-pointer ' : 'cursor-pointer';

    return (
        <span className='menu-item'>
            <Link to={menuItem.url} className='a-block'>
                <div className={activeStyle} onClick={() =>{handleClick(menuItem)}} >
                    <div className='icon'>아이콘 : {menuItem.icon}</div>
                    <div className='title'>이름 :{menuItem.name}</div>
                </div>
            </Link>
        </span>
    )
}
import React from "react";
import { IMenuItem }from '../../interfacies';
import { Link } from "react-router-dom";


interface Props {
    menuItem : IMenuItem,
    handleClick : any,
}

export const MenuItem : React.FC<Props> = (props : Props)  => {

    let activeStyle = props.menuItem.active ? 'menuActive cursor-pointer ' : 'cursor-pointer';

    return (
        <span className='menu-item'>
            <Link to={props.menuItem.url} className='a-block'>
                <div className={activeStyle} onClick={() =>{props.handleClick(props.menuItem)}} >
                    <div className='icon'>아이콘 : {props.menuItem.icon}</div>
                    <div className='title'>이름 :{props.menuItem.name}</div>
                </div>
            </Link>
        </span>
    )
}
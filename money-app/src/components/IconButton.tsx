
import React from 'react';
import { Link } from "react-router-dom";
import { Icon, IconName, Tag } from "@blueprintjs/core";

interface Props{
    title : string, 
    icon : IconName,
    iconSize : number,
    contents : string,
    href : string
}


export function IconButton( { title , contents , icon , iconSize , href } : Props  ) { 

    return (
        <div className='flex-item buttonBox'>
            <Link to={href}>
                <div>
                    <div className='text-center' style={{marginBottom:7}}>
                        <Icon icon={icon} iconSize={iconSize}></Icon>
                    </div>
                    <div className='text-center'>
                        {
                            contents ? <Tag minimal={true} round={true}>{contents}</Tag> : ''
                        }
                    </div>
                    <div className='fontSzie11 text-center'>
                        {title}
                    </div>
                </div>
            </Link> 
        </div>
    )
}
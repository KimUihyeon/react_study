import React from "react";
import { IMenuItem }from '../interfacies';
import { MenuItem } from './MenuItem'
import { Button , Drawer, Position} from '@blueprintjs/core'
import { Connect } from 'react-redux'

interface Props {
    menuItems : IMenuItem[],
    isOpen : boolean,
    handleMenuSwitch : any
}


export function Menu ({ menuItems, isOpen , handleMenuSwitch  } :Props)  {
    
    let mapToComponent = menuItems.map((data)=>{
        return (
            <div>
            </div>
        )
    })

    return (
        <div className='menu'>
            <Button onClick={()=>{handleMenuSwitch(true)}}>Show Drawer</Button>
            
            <Drawer
                icon="info-sign"
                isOpen={isOpen}
                position={Position.LEFT}
                onClose={()=>{handleMenuSwitch(false)}}
                title="Palantir Foundry">

                <div>
                    안녕~
                </div>
            </Drawer>
        </div>
    )
}


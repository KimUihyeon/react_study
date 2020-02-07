import React from "react";
import { IMenuItem }from '../interfacies';
import { MenuItem } from './MenuItem'
import { Button , Drawer, Position} from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
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
            <Button
                large={true}
                minimal={true}
                icon={IconNames.MENU_OPEN} 
                onClick={()=>{handleMenuSwitch(true)}}/>
            <Drawer
                icon={IconNames.MENU}
                isOpen={isOpen}
                
                position={Position.LEFT}
                size={'100%'}
                onClose={()=>{handleMenuSwitch(false)}}
                title="Menu">

                <div>
                    안녕~
                </div>
            </Drawer>
        </div>
    )
}


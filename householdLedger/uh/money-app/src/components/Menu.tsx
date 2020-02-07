import React from "react";
import { IMenuItem }from '../interfacies';
import { MenuItem } from './MenuItem'
import { Button , Drawer, Position, Icon, Intent, Classes, ITreeNode, Tree} from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import { Connect } from 'react-redux'

interface Props {
    menuItems : IMenuItem[],
    isOpen : boolean,
    handleMenuSwitch : any
}


export function Menu ({ menuItems, isOpen , handleMenuSwitch  } :Props)  {
    
    let data = { nodes: INITIAL_STATE };

    let mapToComponent = menuItems.map((data : IMenuItem)=>{
        return (
            <div>
                <MenuItem
                    key={data.id}
                    handleClick={handleMenuSwitch}
                    menuItem={data} />
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
                lazy={true}
                position={Position.TOP}
                size={'100%'}
                onClose={()=>{handleMenuSwitch(false)}}
                title="Menu">

                <div>
                    <Tree
                        contents={data.nodes}
                        className={Classes.ELEVATION_4}/>
                </div>
            </Drawer>
        </div>
    )
}



const INITIAL_STATE: ITreeNode[] = [
    {
        id: 0,
        hasCaret: false,
        icon: "folder-close",
        label: '메인화면',
    },
    {
        id: 1,
        hasCaret: false,
        icon: "folder-close",
        label: '오늘의 가계부',
    },
    {
        id: 2,
        hasCaret: false,
        icon: "folder-close",
        label: '금주의 가계부',
    },
    {
        id: 3,
        hasCaret: false,
        icon: "folder-close",
        label: '가계부 등록',
    },
    {
        id: 4,
        hasCaret: true,
        icon: "folder-close",
        label: '사용실적 통계',
    },
    {
        id: 5,
        icon: "folder-close",
        isExpanded: true,
        label: '가계부 관리',
        childNodes: [
            {
                id: 6,
                icon: "document",
                label: "카드관리",
                secondaryLabel: (
                    <div></div>
                ),
            },
            {
                id: 7,
                icon: "document",
                label: "카테고리관리",
                secondaryLabel: (
                    <div></div>
                ),
            },
            {
                id: 8,
                icon: "document",
                label: "사용금액 목표설정",
                secondaryLabel: (
                    <div></div>
                ),
            },
            {
                id: 9,
                icon: <Icon icon="tag" intent={Intent.PRIMARY} className={Classes.TREE_NODE_ICON} />,
                label: "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
            },
            {
                id: 10,
                hasCaret: true,
                icon: "folder-close",
                label: (
                    <div></div>
                ),
            },
        ],
    }
];
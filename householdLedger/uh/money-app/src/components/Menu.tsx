import React from "react";
import { IMenuItem }from '../interfacies';
import { MenuItem } from './MenuItem'
import { Button , Drawer, Position, Icon, Intent, Classes, ITreeNode, Tree} from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import { Connect } from 'react-redux'
import { Link } from "react-router-dom";
import { MoneyForm } from "./MoneyForm";

interface Props {
    isOpen : boolean,
    handleMenuSwitch : any
}


export function Menu ({ isOpen , handleMenuSwitch  } :Props)  {
    
    let data = { nodes: INITIAL_STATE };

    return (
        <div>
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
                        onNodeClick={({hasCaret})=>{
                            if(!hasCaret){
                                handleMenuSwitch(false);
                            }
                        }}
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
        label: (<Link onClick={()=>{}} to="/main">메인화면</Link>),
    },
    {
        id: 1,
        hasCaret: false,
        icon: "folder-close",
        label: (<Link to="/main">오늘의 가계부</Link>),
    },
    {
        id: 2,
        hasCaret: false,
        icon: "folder-close",
        label: (<Link to="/main">금주의 가계부</Link>),
    },
    {
        id: 3,
        hasCaret: false,
        icon: "folder-close",
        label: (<Link to="/main">이달의 가계부</Link>),
    },
    {
        id: 4,
        hasCaret: true,
        icon: "folder-close",
        label: (<Link to="/main">사용실적</Link>),
    },
    {
        id: 5,
        icon: "folder-close",
        hasCaret: false,
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
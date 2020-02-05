import React, { Dispatch } from "react";
import * as actions from '../actions';
import { IMenuItem } from '../interfacies';
import { connect, DispatchProp }  from 'react-redux'
import { stateTypes } from '../reducers'
import { Menu } from '../components/common/Menu'


interface Props {
    menuItems : IMenuItem[],
    menuItemClick : any
}

function Header ({ menuItems, menuItemClick } : Props) {
  return(
    <div>
        <Menu 
            handleItemClick={menuItemClick}
            menuItems={menuItems}/>
    </div>
  )
}

Header.defaultProps = {
  menuItems : [],
  menuItemClick : ()=>{ console.error('menuItemClick undefind')}
}

const mapStateToProps = (state : stateTypes) : object => {
    return {
      menuItems : state.menu.menuItems
    }
  }
  
const mapDispatchToProp = (dispatch : any) : object =>{
  return {
    menuItemClick : (menuItem : IMenuItem) => {
        dispatch(actions.MenuActions.MenuClick(menuItem))}
  }
}
  
  
  
export default connect(mapStateToProps,mapDispatchToProp)(Header);
import React, { Dispatch } from "react";
import * as actions from '../actions';
import { IMenuItem , IMoney } from '../interfacies';
import { connect, DispatchProp }  from 'react-redux'
import { stateTypes } from '../reducers'
import { Menu } from '../components/Menu'

interface Props2 {
  moneys : IMoney[],
  handleClick : any,
}

interface Props {
    isOpen : boolean,
    menuItems : IMenuItem[],
    handleMenuSwitch : any,
}

function Header ({ isOpen ,menuItems , handleMenuSwitch } : Props) {
  return(
    <div>
        <Menu 
            isOpen={isOpen}
            handleMenuSwitch={handleMenuSwitch}
            menuItems={menuItems}/>
    </div>
  )
}

const mapStateToProps = (state : stateTypes) => {
  console.log(state.ui.menu.isMenuOpen);
    return {
      menuItems : state.ui.menu.items,
      isOpen : state.ui.menu.isMenuOpen,
    }
  }
  
const mapDispatchToProps = (dispatch : any) =>{
  return {
    handleMenuSwitch : (isOpen : boolean) => {dispatch(actions.UIAction.ui_menu_switch(isOpen))}
  }
}
  
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);
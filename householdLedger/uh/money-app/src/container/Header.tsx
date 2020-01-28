import React from "react";
import * as actions from '../actions';
import { IMenuItem } from '../interfacies';
import { connect }  from 'react-redux'
import { Menu } from '../components/common/Menu'


interface Props {
    menuItems : IMenuItem[],
    menuItemClick : any
}

const Header : React.SFC<Props> = (props)=>{
    return(
        <div>
            <Menu 
                handleItemClick={props.menuItemClick}
                menuItems={props.menuItems}/>
        </div>
    )
}
Header.defaultProps = {}


const mapStateToProps = (state) : any => {
    return {
      menuItems : state.menu.menuItems
    }
  }
  
  const mapDispatchToProp = (dispatch) : any =>{
    return {
      menuItemClick : (menuItem : IMenuItem) => {
          dispatch(actions.MenuActions.MenuClick(menuItem))}
    }
  }
  
  
  
export default connect(mapStateToProps,mapDispatchToProp)(Header);
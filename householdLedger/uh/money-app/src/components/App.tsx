import React from 'react';
import { Form as CategoryForm } from './categories/Form'
import { Form as MoneyForm} from './money/Form'
import { List as MoneyList} from './money/List'
import { Menu } from './common/Menu'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import { IMenuItem } from '../interfacies'

interface AppProps {
  menuItems : IMenuItem[],
  menuItemClick : any
}

const App : React.FC = (props : AppProps) => {
  return (
    <div>
      <Menu
          menuItems={props.menuItems}
          handleItemClick={props.menuItemClick}/>
      <div></div>
    </div>
  )
}


const mapStateToProps = (state) : any => {
  return {
    menuItems : state.menu.menuItems
  }
}

const mapDispatchToProp = (dispatch) : any =>{
  return {
    menuItemClick : (menuItem : IMenuItem) => {dispatch(actions.MenuActions.MenuClick(menuItem))}
  }
}



export default connect(mapStateToProps,mapDispatchToProp)(App);
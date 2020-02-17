import React, { Dispatch } from "react";
import * as actions from '../actions';
import { IMenuItem , IMoney } from '../interfacies';
import { connect, DispatchProp }  from 'react-redux'
import { stateTypes } from '../reducers'
import { Menu } from '../components/Menu'
import { IconNames } from '@blueprintjs/icons'
import { Button } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import { MoneyForm } from "../components/MoneyForm";

interface Props {
    isMenuOpen : boolean,
    isFormOpen : boolean,
    handleMenuSwitch : any,
    handleFormClose : any,
    handleFormOpen : any,
    handleClick_save : any,
    selectedMoney : IMoney,
    handleFlagChange : any
}

function Header ( props : Props) {  

  let { isMenuOpen, isFormOpen , handleMenuSwitch , selectedMoney,
    handleFlagChange ,handleFormClose, handleFormOpen ,handleClick_save  } = props;

    console.log(selectedMoney);

  return(
    <div className='menu'>
      <Button
          large={true}
          minimal={true}
          icon={IconNames.MENU_OPEN} 
          onClick={()=>{handleMenuSwitch(true)}}/>

      <Button
          style={{position:"absolute",right:15}}
          large={true}
          minimal={true}
          icon={IconNames.PLUS} 
          onClick={()=>{handleFormOpen(true)}} />

      <Menu isOpen={isMenuOpen} handleMenuSwitch={()=>{handleMenuSwitch(false)}}/>

      <MoneyForm isModal={isFormOpen} 
          money={selectedMoney}
          handleFlagChange={handleFlagChange}
          handleClick_save={handleClick_save}
          handleClick_close={handleFormClose}
      />
    </div>
  )
}

const mapStateToProps = (state : stateTypes) => {
    return {
      isMenuOpen : state.ui.menu.isMenuOpen,
      isFormOpen : state.ui.isOpenRegModal,
      selectedMoney : state.money.selectedMoney
    }
  }
  
const mapDispatchToProps = (dispatch : any) =>{
  return {
    handleClick_save : (money : IMoney) => {
        dispatch(actions.MoneyAction.insertMoney(money));
        dispatch(actions.UIAction.ui_reg_modal_switch(false));
        dispatch(actions.MoneyAction.createSelectMoney());
    },
    handleFormOpen : ()=> {
      dispatch(actions.MoneyAction.createSelectMoney());
      dispatch(actions.UIAction.ui_reg_modal_switch(true))
    },
    handleFlagChange : (name : string, flag : any)=>{dispatch(actions.MoneyAction.moneyFlagChanged(name,flag))},
    handleFormClose : ()=> {dispatch(actions.UIAction.ui_reg_modal_switch(false)) },
    handleMenuSwitch : (isOpen : boolean) => {dispatch(actions.UIAction.ui_menu_switch(isOpen))}
  }
}


function getSelectedMoney(){

}
  
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);
import React from 'react';
import Body from './Body'
import Header from './Header'
import MoneyListPage from './MoneyListPage'
import Footer from './Footer'

export function App (){
  return (
    <div className="app color-mainBG">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}
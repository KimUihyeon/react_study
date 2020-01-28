import React from 'react';
import Body from '../container/Body'
import Header from '../container/Header'
import Footer from '../container/Footer'

const App : React.SFC = () => {
  return (
    <div>
      <Header />
      <Body/>
      <Footer/>
    </div>
  )
}


export default App;
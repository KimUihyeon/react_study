import React from 'react';
import Body from '../container/Body'
import Header from '../container/Header'
import Footer from '../container/Footer'
import { Button, Intent, Spinner } from "@blueprintjs/core";

const App : React.FC = () => {
  return (
    <div>
      <Button icon="refresh" intent="danger" text="Reset" />
      <Button className="docs-wiggle">test</Button>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}


export default App;
import React, { useState } from 'react';
import logo from './logo.svg';
import MyComponent from './components/MyConponent'
import './App.css';


class App extends React.Component {

  
  state : { 
    name : string ,
    tel : string,
    key : number,
  }

  constructor(props : any){
    super(props);

    this.state = {
      name : '김의현',
      tel : '010-1111-1111',
      key : 1
    }

    this.handleUpClick.bind(this);
  }



  handleUpClick = () => {
    console.log('이거탐??')
    this.setState({
        ...this.state,
        key : 3
      }
    )

    this.forceUpdate();
    console.log(this.state.key);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <MyComponent key={this.state.key} handleUpclick={this.handleUpClick}/>
        </header>
      </div>
      );
  }
}
export default App;

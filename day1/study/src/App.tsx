import React from 'react';
import logo from './logo.svg';
import MyComponent from './components/MyConponent'
import Arrowbox from './components/Arrowbox'
import './App.css';



class App extends React.Component {
  
  state : {  // --------- 2번
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
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <MyComponent name={this.state.key}/>
        </header>
      </div>
      );
  }
}
export default App;

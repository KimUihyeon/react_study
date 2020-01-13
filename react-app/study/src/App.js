import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render(){
    return (

      <div className="App">
        <h1>{this.props.name}
        </h1>
      
      </div>
    )
  }
}


App.propTypes = {
  name : React.PropTypes.string
}

App.defaultProps = {
  name : 'unknown'
}
export default App;

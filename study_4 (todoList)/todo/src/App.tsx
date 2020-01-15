import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Task from "./datas/data";



class App extends React.Component {

  state : {
    keyWord : string 
    todoList : Task[],
  }

  constructor(props : any){
    super(props)
    this.state = {
      keyWord : '',
      todoList : [],
    }
  }



  render(){

    return(
      <div>
        <div>
          <h3>Todo List</h3>
        </div>
        <div>
          <input type="text" />
        </div>
        <div>
        </div>
        <div id="footer">
        </div>
      </div>
    )
  }
 }


export default App;

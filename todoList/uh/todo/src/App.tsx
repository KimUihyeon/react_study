import React from 'react';
import './styles/App.css';
import TodoSearchBar from './components/TodoSearchBar';
import TodoList from './components/TodoList';
import Todo from "./datas/data";


class App extends React.Component {

  state : {
    keyword : string,
    todoList : Todo[],
  }

  constructor(props : any){
    super(props)
    this.state = {
      keyword : '',
      todoList : [],
    }
  }
  
  handleTextChanged = (e : {target : HTMLInputElement} ) => {

    this.setState({
      keyword : e.target.value
    });
  }

  handleEnterKeyDown = (e : any) =>{
    let elementName = e.target.name;

    if(e.keyCode === 13){
      switch(elementName){
        case 'searchBar' : { this.addTodo(); break; }
      }
    }
  }

  handleClick = (e : any , obj : any ) => {
    let elementName : string = e.target.name;
    switch(elementName){
      case 'deleteTodo' : {  this.deleteTodo(obj as Todo); break;}
    }
  }


  handleCheckboxChanged = (e : any , todo : Todo) => {
    let { todoList } = this.state;

    let idx : number = todoList.findIndex( d => d.id === todo.id );
    let cloneTodoList = [...todoList];

    cloneTodoList[idx] = {
      ...todo,
      complate : !todo.complate
    }

    this.setState({
      todoList : cloneTodoList
    })
  }

  deleteTodo(todo : Todo){
    this.setState({
      todoList : this.state.todoList.filter((d)=>d.id !== todo.id)
    });
  }
  
  addTodo(){
    let todo = new Todo(this.state.keyword, new Date());
    let lastTodo = [...this.state.todoList].reverse()[0];

    this.setState({
      todoList : this.state.todoList.concat(
        {
          ...todo ,
          id : lastTodo !== undefined ? lastTodo.id + 1  : 0 
        }),
      keyword : ''
    })
  }


  

  render(){

    return(
      <div className='app-main'>
        <div>
          <h3 className='title'>Todo List</h3>
        </div>

        <TodoSearchBar
          keyword={this.state.keyword} 
          onChange={this.handleTextChanged}
          onKeyDown={this.handleEnterKeyDown}
          />
        <TodoList
            todoList={this.state.todoList} 
            onChkboxChanged={this.handleCheckboxChanged}
            onClick={this.handleClick}
          />
      </div>
    )
  }
 }


export default App;

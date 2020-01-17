import React from "react";
import Todo from '../datas/data'
import TodoItem from './TodoItem';
import '../styles/App.css'

interface TodoListParam{
    todoList : Todo[],
    onChkboxChanged : any,
    onClick: any
}


class TodoList extends React.Component<TodoListParam> {

    render(){
        const dataToComponent = (todoList : Todo[]) =>{
            return todoList.map((todo : Todo)=>{
                return (
                    <TodoItem key={todo.id} 
                        todo={todo} 
                        onChkChanged={this.props.onChkboxChanged}
                        onClick={this.props.onClick}
                    />
                )
            })
        }
        
        return (
            <div >
                {dataToComponent(this.props.todoList)}
            </div>
        );
    }
}

export default TodoList;
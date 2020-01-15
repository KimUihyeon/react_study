import React from 'react';
import Todo from '../datas/data';


interface TodoParam{
    todo : Todo,
    onChkChanged : any,
    onClick : any,
}

class TodoItem extends React.Component<TodoParam> {

    render(){
        return (
        <div>
            <span>
                <input type='checkbox' 
                    checked={this.props.todo.complate} 
                    onChange={(e)=> this.props.onChkChanged(e,this.props.todo)} />
            </span>
            <span>
                {this.props.todo.title}
            </span>
            <span>
                <button name='deleteTodo' onClick={(e)=>this.props.onClick(e,this.props.todo)}>x</button>
            </span>
        </div>
        )
    }

}


export default TodoItem;
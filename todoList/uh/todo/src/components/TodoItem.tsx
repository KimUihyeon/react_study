import React from 'react';
import Todo from '../datas/data';
import '../styles/App.css';


interface TodoParam{
    todo : Todo,
    onChkChanged : any,
    onClick : any,
}

class TodoItem extends React.Component<TodoParam> {

    render(){

        const contextStyle = `content-area ${this.props.todo.complate ? 'text-linethrough ' : ''}`;
        

        return (
        <div className='todo-item'>
            <div className='checkbox-area'>
                <input type='checkbox' className='hidden'
                    id={`chk_${this.props.todo.id}`}
                    checked={this.props.todo.complate} 
                    onChange={(e)=> this.props.onChkChanged(e,this.props.todo)} />

                <label htmlFor={`chk_${this.props.todo.id}`} >
                    {this.props.todo.complate ? '✓' : 'O'}
                </label>
                
            </div>
            <div className={contextStyle}>
                {this.props.todo.title}
            </div>
            <div className='delete-area'>
                <button name='deleteTodo' className='button'
                 onClick={(e)=>this.props.onClick(e,this.props.todo)}>x</button>
            </div>
        </div>
        )
    }

}


export default TodoItem;
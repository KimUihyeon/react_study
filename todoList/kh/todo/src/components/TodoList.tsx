import * as React from 'react';
import '../App.css';
import ITodoObject from '../interface/ITodoObject';

 const TodoItem = ({todo, index, onRemove, onFlagChange}) => {
    return <div className="each_todoItem">
               <input type='checkbox' checked={todo.isFinished} onChange={() => onFlagChange(todo.id)}></input>
               <span className={todo.isFinished ? 'checked_todo' : ''} style={{maxWidth:335}}>{index + 1}. {todo.content}</span>
               <div className="todo_deleteBtn" onClick={() => onRemove(todo.id)}>❌</div>
            </div>
 }

const TodoList = ({todos, onRemove, onFlagChange}) => {
   return <div>
            {todos.map((todo, index) => (
               <TodoItem todo={todo} 
                         index={index}
                         onRemove={onRemove}
                         onFlagChange={onFlagChange}
                         key={todo.id}></TodoItem>
            ))}
         </div>
}

export default TodoList;
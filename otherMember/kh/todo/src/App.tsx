import * as React from 'react';
import {useState, useRef} from 'react';
import './App.css';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';
import ITodoObject from './interface/ITodoObject';

const App: React.FC = () => {
  const todoList: ITodoObject[] = [
    {
      id: 1,
      content: '타입스크립트 공부',
      isFinished: false
    },
    {
      id: 2,
      content: '리액트 공부',
      isFinished: true
    },
    {
      id: 3,
      content: '웹팩 공부',
      isFinished: false
    }
  ];
  const [todos, setTodos] = useState<ITodoObject[]>(todoList);
  const [inputContent, setInputContent] = useState<string>('');
  const refContentInput = useRef<HTMLInputElement>();

  const onContentChange = (e): void => {
    setInputContent(e.target.value);
  };

  const onFinishedChange = (id): void => {
    todos.forEach(todo => {
      if(todo.id == id){
        let updateTodo: ITodoObject = {
          ...todo,
          isFinished: !todo.isFinished
        };
        setTodos(todos.map(todo => (todo.id === id ? updateTodo : todo)));
        return;
      }
    });
  };

//  const enterPress = (e) => {
//   if(e.key === 'Enter') {
//     createTodo(e);
//   }
// }


  const createTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => { 
    if(inputContent == null || inputContent.trim() == '')
    {
      alert('할일을 입력 후 추가해주세요');
      return;
    }
    const newTodo: ITodoObject = {
      id: Math.max(...todos.map(todo => todo.id), 0) + 1,
      content: inputContent,
      isFinished: false
    };
    setTodos(todos.concat(newTodo));
    refContentInput.current?.focus();
    setInputContent('');
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todoMain">
      <div className="todo_title">Todo List</div>
      <InputForm onCreate={createTodo} 
                inputContent={inputContent} 
                onChange={onContentChange} 
                useRef={refContentInput}></InputForm>
      <TodoList todos={todos} 
                onRemove={removeTodo}
                onFlagChange={onFinishedChange}></TodoList>
    </div>
  );
}

export default App;

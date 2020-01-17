import * as React from 'react';
import ITodoObject from '../interface/ITodoObject';

// type TodoObject = {
//     content: string,
//     key: number,
//     isFinished: boolean
// }

const InputForm = ({onCreate, inputContent, onChange, useRef}) => {
   return <div style={{marginTop:10, display:'flex', height:30}}>
            <input type='text' className="todo_inputForm" placeholder="할일을 입력하세요" value={inputContent} onChange={onChange} ref={useRef}></input>
            <button onClick={onCreate} className="todo_addBtn">등록</button>
         </div>; 
}

// InputForm.defaultProps = {
//     id: 0,
//     content: '',
//     isFinished: false
// } as ITodoObject;

export default InputForm;
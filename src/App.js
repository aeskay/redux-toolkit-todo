import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {addText, addTodo, addEditedTodo, addEditedTodoTwo} from './features/counter/todoSlice'
import './App.css';
import { useRef } from 'react'
import TodoList from './components/TodoList';

function App() {

  const dispatch = useDispatch()
  const list = useSelector(state => state.todos.list);
  const text = useSelector(state => state.todos.text);
  const editing = useSelector(state => state.todos.editing);

  const handleChange = (e) => {
    dispatch(addText(e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(editing){
      console.log('true')
      dispatch(addEditedTodo({text}));
      dispatch(addEditedTodoTwo())
      setInputFocus()
    } else {
      console.log('false');
      dispatch(addTodo({text}))
      setInputFocus()
    }
     
  }

  

  const useFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

    return [ htmlElRef, setFocus ] 
}
const [inputRef, setInputFocus] = useFocus()

  return (
    <div className="App ">
      <div>
        <div className="row bg-info py-5 mb-4">
          <div className="container col-sm-6 col-md-4 ">
            <h3 className="text-light h2">Queen's Todo List</h3><br/>
            <form onSubmit={handleSubmit} className="form-inline justify-content-center">
              <div className="form-group mb-2">
                <input 
                  value={text} 
                  onChange={handleChange} 
                  type="text" 
                  className="form-control" 
                  id="inputText" 
                  aria-describedby="inputHelp" 
                  placeholder="Enter Todo"
                  ref={inputRef}
                />
              </div>
              <button type="submit" className="btn btn-success mb-2">Add Todo</button>
            </form>
          </div>
        </div>
        <div>
          <ul className="list-group">
            <TodoList list={list} setInputFocus={setInputFocus}/>
          </ul>
        </div>        
      </div>
    </div>
  );
}


export default App;

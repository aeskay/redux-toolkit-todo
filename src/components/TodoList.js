import React from 'react'
import {removeTodo, editText} from '../features/counter/todoSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useState } from 'react'
import Flipmove from 'react-flip-move';


function TodoList({list, setInputFocus}) {
   
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(removeTodo({id}))
    }

    const handleEdit = (id, text) => {  
       dispatch(editText({id, text}))
       setInputFocus()
    }



    const items = list.map(todo => {
        return (<React.Fragment  key={todo.id}>
        <div className="mb-3 row justify-content-center">
            <div className=" rounded-top bg-info col-sm-9 py-2 mr-1">
                <span className="todo-item h5 text-white">
                {todo.todo}
                </span>
            </div>
            <div className="mt-1">
            <span>
                <i className="fa fa-edit mr-2" title="Edit Todo" onClick={() => handleEdit(todo.id, todo.todo)}></i>
                <i className="fa fa-trash" title="Delete Todo" onClick={()=>handleDelete(todo.id)}></i>
            </span>
            </div>
        </div>
        </React.Fragment>)
    })
    return (
        <div className="container col-sm-6 col-md-3">
            {/* <Flipmove duration={250} easing ={'ease-out'}> */}
                {items}
            {/* </Flipmove> */}
        </div>
    )
}

export default TodoList

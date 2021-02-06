import { createSlice } from '@reduxjs/toolkit';


let nextTodoId = 0
export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
    text: '',
    editing: false,
    count: null
  },
  reducers: {
    addText(state, action){
      const {text} = action.payload
      return{
        ...state,
        text: action.payload
      }
    },
    addTodo(state, action) {
      const {text} = action.payload;
      return {
         ...state,
         list: state.list.concat({id: nextTodoId++, todo:text}),
         text: '',
         editing: false
        }
    },
    addEditedTodo(state, action) {
      const {text} = action.payload;
      const id = state.count
      const editedItem = state.list.find(item => item.id === id)
      const index = state.list.indexOf(editedItem)
      
      // const newList = state.list.splice(1, index, {id, todo: text})
      state.list[index] =  {id, todo: text}
      console.log()
      return void({
         ...state,
        //  list: [...newList],
         text: '',
         editing: false,
         count: null
        })
    },
    addEditedTodoTwo(state, action){
      return{
        ...state,
        text: '',
        editing: false,
        count: null
      }
    },
    removeTodo(state, action) {
      const {id} = action.payload;
      // return state.
      return {
        ...state,
        list: state.list.filter(item => item.id !== id)
      }
    },
    editText(state, action) {
      const {text, id} = action.payload;
      return {
        ...state,
        text: text,
        editing: true,
        count: id
      }
    }
  },
});

export const { addTodo, removeTodo, addText, editText, addEditedTodo, addEditedTodoTwo } = todoSlice.actions;


export default todoSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/counter/todoSlice';
import {createLogger} from 'redux-logger'

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});

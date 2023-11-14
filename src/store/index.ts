import { configureStore } from "@reduxjs/toolkit";
import  todoListReducer from './module/todoList'

export default  configureStore({
    reducer:{
        todoListReducer
    }
})

import { createSlice} from "@reduxjs/toolkit";

interface Todo  {
    id:number,
    name:string,
    done:boolean
}
interface todoListState{
    todoList:Todo[]
}

const initialState:todoListState = {
    todoList:[]
}


export const  TodoListSlice = createSlice({
    name:'todoList',
    initialState,
    reducers:{
        addTodo:(state,action:{payload:Todo})=>{
            state.todoList.push(action.payload)
        },
        deleteTodo:(state,action:{payload:number})=>{
            state.todoList = state.todoList.filter((todo:Todo)=>todo.id!== action.payload)
        },
        finedTodo:(state,action:{payload:number}) =>{
            state.todoList = state.todoList.map((todo:Todo):any=>{
                if(todo.id === action.payload){
                    todo.done =!todo.done
                }
                return todo
            })
        }
        }

})

export  const  {addTodo,deleteTodo,finedTodo} = TodoListSlice.actions
export  default TodoListSlice.reducer

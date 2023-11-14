import { useState} from 'react';
import {v4 as uuidv4} from 'uuid'
import Header from "./components/Header";
import Footer from "./components/Footer";
import {useDispatch,useSelector } from "react-redux";
import { addTodo,deleteTodo,finedTodo } from "../../store/module/todoList";


interface ListItem {
    id: number,
    name: string,
    done: boolean
}

const TodoList = () => {
    const dispatch = useDispatch()
    const todoList = useSelector((state:any) => {
        console.log(state, 'state')
        return state.todoListReducer.todoList
    })



    const addItem = (value: any) => {
        if (value) {
            dispatch(addTodo({
                name: value,
                id: uuidv4(),
                done: false
            }))

            // setValue('')
        }
    }

    const clickItem = (id: number) => {
        dispatch(finedTodo(id))

        // setList(list.map((item) => {
        //     if (id === item.id) {
        //         return {...item, done: !item.done}
        //     }
        //     return item
        // }))

    }
    const delItem = (id: number) => {
        dispatch(deleteTodo(id))
        // setList(list.filter((item) => item.id !== id))
    }

    return (
        <div className="app">
            <div className="main">
                <Header addItem={addItem}/>
                <Footer list={todoList} clickItem={clickItem} delItem={delItem}/>
            </div>
        </div>
    );
}

export default TodoList

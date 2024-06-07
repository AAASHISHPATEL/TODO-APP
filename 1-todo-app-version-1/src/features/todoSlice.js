import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos : [{id: 1,text: "hello world",completed: false}]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers : {
    addTodo: (state,action)=>{
      const todo ={
        id: nanoid(),
        text: action.payload,
        completed: false
      }
      state.todos.push(todo)
    },
    removeTodo: (state,action)=>{
      state.todos= state.todos.filter((todo)=> todo.id !== action.payload)
    },
    doneTodo :(state,action) =>{
      state.todos=state.todos.map((todo)=>{
        if(todo.id===action.payload){
          todo.completed=!todo.completed
        }
        return todo;
      })
    },
  }
})

export const {addTodo,removeTodo,doneTodo} =todoSlice.actions

export default todoSlice.reducer
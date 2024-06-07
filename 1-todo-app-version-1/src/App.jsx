import React, { useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { addTodo ,removeTodo,doneTodo} from "./features/todoSlice";

function App() {

    const [input,setInput]=useState('')
    const dispatch=useDispatch()

    const addTodoHandler =()=>{
        if(input.length!==0){
            dispatch(addTodo(input))
        setInput('')
        }
    }
    const update=(todo)=>{
       setInput(todo.text)
        dispatch(removeTodo(todo.id))
    }

    const todos=useSelector(state=>state.todos)

  return (
    <>
    
<div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans mt-20">
	<div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
            <div className="flex mt-4">
                <input type="text" value={input} onChange={(event)=> setInput(event.target.value )}
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Enter Todo"/>
                <button onClick={addTodoHandler} className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500">Add</button>
            </div>
        </div>
        
        <div>
            {todos.map((todo)=>(
                <div key={todo.id} className="flex mb-4 items-center ">
                    {/* <input type="checkbox" key={todo.id} ></input> */}
                <p className={`border-2 rounded border-violet-600 w-full mb-0 p-2 font-bold ${todo.completed===true?"line-through text-green-500" : "text-grey"}`}>{todo.text}</p>
                <button onClick={()=>(update(todo))} className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500">Update</button>
                <button onClick={()=>dispatch(doneTodo(todo.id))} className="flex-no-shrink p-2 ml-2 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500">{`${todo.completed===true?"Not Done":"Done"}`}</button>
                <button onClick={()=> dispatch(removeTodo(todo.id))} className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">Remove</button>
            </div>
            ))}
          	
        </div>
    </div>
</div>
    
    </>
  );
}

export default App;

import { useState, useContext } from "react"
import { TodoContext } from "../context/TodoContext"

export function TodoInput() {
    const [todoText,setTodoText] = useState("")
    
    const {addTodo} = useContext(TodoContext)

    return (
        <div>
            <input type="text" name="todo" placeholder="What needs to be done?" value={todoText} onChange={(e)=>setTodoText(e.target.value)} className="border border-black" />
            <button className="bg-blue-600 py-1 px-2 m-4 text-white" onClick={()=>addTodo(todoText)}>Add Todo</button>
        </div>
    )
}
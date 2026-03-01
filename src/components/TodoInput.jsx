import { useState, useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { cn, styles } from "../utils/utils"

export function TodoInput() {
    const [todoText,setTodoText] = useState("")
    
    const {addTodo} = useContext(TodoContext)

    return (
        <div className="m-4">
            <input type="text" name="todo" placeholder="What needs to be done?" value={todoText} onChange={(e)=>setTodoText(e.target.value)} onKeyDown={(e)=>{if(e.key === "Enter"){addTodo(todoText);setTodoText("");}}} className={styles.input} />
            <button className={cn(styles.button,styles.buttonActive, "m-4 py-2 px-3")} onClick={()=>{addTodo(todoText);setTodoText("");}}>Add Todo</button>
        </div>
    )
}
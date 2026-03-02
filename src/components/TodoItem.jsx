import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { useState } from "react"
import { cn, styles } from "../utils/utils"

export function TodoItem({id,text,completed}) {
    const [textField,setTextField] = useState(text)
    const [editing,setEditing] = useState(false)

    const {editTodo, toggleTodo, deleteTodo} = useContext(TodoContext)

    const handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            if(textField.trim() !== "") {
                editTodo(id,textField.trim())
            }
            setEditing(!editing)
        }
    }

    return (
        <>
        <div className="flex justify-between items-center border-b border-b-gray-300 py-4">
        { editing  && (
                <input name="editTodo" type="text" value={textField} onChange={(e)=>setTextField(e.target.value)} onKeyDown={(e)=>handleKeyDown(e)} aria-label="Task Text" className={cn(styles.input,"sm:w-full mx-4")} />
        )}
        { !editing  && (
            <>
                <div>
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={()=>toggleTodo(id)}
                        className={cn("rounded-full h-6 w-6 text-green-500 focus:ring-green-500 border-gray-300","accent-green-500 rounded-full mx-4")}
                    />
                    <span className={cn({"line-through":completed},)}>
                        {text}
                    </span>
                </div>
                <div>
                    <button
                        aria-label="Edit"
                        title="Edit"
                        onClick={()=>setEditing(!editing)}
                        className="text-red-600 mx-2"
                    >
                        ✏️
                    </button>
                    <button
                        aria-label="Delete"
                        title="Delete"
                        onClick={()=>deleteTodo(id)}
                        className="text-red-600 mx-2 mr-4"
                    >
                        🗑️
                    </button>
                </div>
            </>
        )}
        </div>
        </>
    )
}
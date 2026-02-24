import { useContext } from "react"
import { TodoContext } from "./TodoContext"
import { useState } from "react"

export function TodoItem({id,text,completed}) {
    const [textField,setTextField] = useState(text)
    const [editing,setEditing] = useState(false)

    const {editTodo, toggleTodo, deleteTodo} = useContext(TodoContext)

    const handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            editTodo(id,textField)
            setEditing(!editing)
        }
    }

    return (
        <>
        { editing  && (
            <p>
                <input type="text" value={textField} onChange={(e)=>setTextField(e.target.value)} onKeyDown={(e)=>handleKeyDown(e)} className="border border-black px-2 py-1" />
            </p>
        )}
        { !editing  && (
            <p>
                <input type="checkbox" checked={completed} onChange={()=>toggleTodo(id)} className="m-4" />
                {text}
                <button
                    onClick={()=>setEditing(!editing)}
                    className="text-red-600 mx-2"
                >
                    Edit
                </button>
                <button
                    onClick={()=>deleteTodo(id)}
                    className="text-red-600 mx-2"
                >
                    Delete
                </button>
            </p>
        )}
        </>
    )
}
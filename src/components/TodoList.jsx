import { TodoContext } from "./TodoContext"
import { TodoItem } from "./TodoItem"
import { useContext } from "react"

export function TodoList() {
    const {todos} = useContext(TodoContext)

    const todoElement = todos.map((todo)=><TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />)

    return (
        <>
        
        <p>List</p>
        {todoElement}

        </>
    )
}
import { FilterContext } from "../context/FilterContext"
import { TodoContext } from "../context/TodoContext"
import { TodoItem } from "./TodoItem"
import { useContext } from "react"
import { FilterButtons } from "./FilterButtons"
import { cn, styles } from "../utils/utils"

export function TodoList() {
    const {todos,clearCompleted} = useContext(TodoContext)
    const {filter} = useContext(FilterContext)

    const todoElements = todos.filter((todo)=>{
        switch (filter) {
            case "active":
                return todo.completed === false
            case "completed":
                return todo.completed === true
            default:
                return true;
        }
    }).map((todo)=>
        <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
    )

    return (
        <>
        
        <FilterButtons />
        {todoElements}
        <div className={cn(styles.flexRowBetween,"px-4")}>
            <div>
                <span className="font-semibold">
                {todos.filter((todo)=>todo.completed == false).length}
                </span> items left
            </div>
            <button onClick={clearCompleted} className="cursor-pointer text-blue-600 text-sm hover:underline">
                Clear Completed 
                ({todos.filter((todo)=>todo.completed == true).length})
            </button>
        </div>

        </>
    )
}
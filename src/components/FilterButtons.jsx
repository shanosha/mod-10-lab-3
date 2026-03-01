import { cn, styles } from "../utils/utils"
import { useContext } from "react"
import { FilterContext } from "../context/FilterContext"

export function FilterButtons() {
    const {filter,setFilter} = useContext(FilterContext)
    return (
        <>
        <div className={cn(styles.flexRow, "px-4")}>
            <button className={cn(styles.button, {"bg-blue-600 dark:bg-blue-600 text-white": filter=="all"})} onClick={()=>setFilter("all")}>All</button>
            <button className={cn(styles.button, {"bg-blue-600 dark:bg-blue-600 text-white": filter=="active"})} onClick={()=>setFilter("active")}>Active</button>
            <button className={cn(styles.button, {"bg-blue-600 dark:bg-blue-600 text-white": filter=="completed"})} onClick={()=>setFilter("completed")}>Completed</button>
        </div>
        </>
    )
}
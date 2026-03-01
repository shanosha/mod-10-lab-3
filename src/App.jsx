import { useState, useEffect } from "react"
import { FilterContext } from "./context/FilterContext"
import { TodoContext } from "./context/TodoContext"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import { ThemeContext } from "./context/ThemeContext"
import { ThemeToggleButton } from "./components/ThemeToggleButton"
import { cn, styles } from "./utils/utils"

const storedTodos = JSON.parse(localStorage.getItem("todoList"))
const storedTheme = localStorage.getItem("theme")

function App() {
    const [todos,setTodos] = useState(storedTodos||[
        {id:"001",text:"Todo 1",completed:false},
        {id:"002",text:"Todo 2",completed:true},
        {id:"003",text:"Todo 3",completed:false}
    ])
    console.log(todos)
    const [filter,setFilter] = useState("all")
    const [theme,setTheme] = useState(storedTheme||"light")

    // Save todos to localstorage on change
    useEffect(() => {
      localStorage.setItem('todoList', JSON.stringify(todos))
    }, [todos])

    // Toggles the "dark" class in the body tag when the "theme" state variable updates.
    useEffect(() => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('theme', theme)
    }, [theme])
    
    const addTodo = (text) => {
      if(text.trim() != "") {
        setTodos([...todos,{id:crypto.randomUUID(),text:text.trim(),completed:false}])
      }
    }
    const toggleTodo = (id) => setTodos((prev)=>
        prev.map((todo)=>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )  
      )
    const deleteTodo = (id) => setTodos((prev)=>
      prev.filter((todo)=>
        todo.id !== id
      )
    )
    const editTodo = (id,newText) => setTodos((prev)=>
        prev.map((todo)=>
            todo.id === id ? { ...todo, text: newText } : todo
        )  
    )
    const clearCompleted = () => setTodos((prev) => 
        prev.filter((todo)=>
          !todo.completed
        )
    )
    const toggleTheme = () => {
      setTheme(theme=="light"?"dark":"light")
    }

      

  return (
    <>
    <h1>Mod 10 - Lab 3</h1>
    <section className={cn(styles.section)}>
      <h2 className={cn(styles.h2)}>Todo App</h2>
      <TodoContext.Provider value={{todos,addTodo,toggleTodo,deleteTodo,editTodo,clearCompleted}}>
        <ThemeContext.Provider value={{theme,toggleTheme}}>
          <ThemeToggleButton />
        </ThemeContext.Provider>
        <TodoInput />
        <FilterContext value={{filter,setFilter}}>
          <TodoList />
        </FilterContext>
      </TodoContext.Provider>
    </section>
    </>
  )
}

export default App

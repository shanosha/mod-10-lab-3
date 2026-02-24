import { useState } from "react"
import { TodoContext } from "./components/TodoContext"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"

function App() {
    const [todos,setTodos] = useState([
        {id:"001",text:"Todo 1",completed:false},
        {id:"002",text:"Todo 2",completed:false},
        {id:"003",text:"Todo 3",completed:false}
    ])
    const addTodo = (text) => setTodos([...todos,{id:crypto.randomUUID(),text:text,completed:false}])
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

      

  return (
    <>
    <h1>Mod 10 - Lab 3</h1>
    <TodoContext.Provider value={{todos,addTodo,toggleTodo,deleteTodo,editTodo,clearCompleted}}>
      <TodoInput />
      <TodoList />
    </TodoContext.Provider>
    </>
  )
}

export default App

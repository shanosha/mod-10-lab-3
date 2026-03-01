import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export function ThemeToggleButton() {

    const {theme,toggleTheme} = useContext(ThemeContext)

    return (
        <>
            <button
                aria-label='Toggle Light and Dark Mode'
                title='Toggle Light and Dark Mode'
                onClick={toggleTheme}
                className="mr-4 float-right cursor-pointer group p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
                {theme === 'dark' ? (<>🌙 <span className='sm:hidden sm:group-hover:inline'>Dark Mode</span></>) : <>☀️ <span className='sm:hidden sm:group-hover:inline'>Light Mode</span></>}
            </button>
        </>
    )
}
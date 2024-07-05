import { useState } from "react"

export default function ToDoInput(props) {
    const { handleAddTodo, todoValue, setTodoValue } = props
    // const [todoValue, setTodoValue] = useState('')

    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter todo..." type="text" />
            <button onClick={() => {
                handleAddTodo(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}

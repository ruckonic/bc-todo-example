
import { useState } from 'react'
import './App.css'

import {Button, TaskList, Title} from './components'

function App() {
  const [todos, setTodos] = useState([])
  const [inputVal, setInputVal] = useState('')
  
  const onTaskInputChange = (e) => {
    setInputVal(e.target.value)
  }

  const onClickTaskButton = () => { 
    const todo = {
      id: crypto.randomUUID(),
      title: inputVal,
      isCompleted: false
    }

    setTodos([todo, ...todos])
    setInputVal('')    
  } 

  return (
    <div>
      <Title>Todos</Title>
      <div>
        <input type='text' value={inputVal} placeholder='Ej: Comprar arroz' onChange={onTaskInputChange} />
        <Button onClick={onClickTaskButton}>Add</Button>
      </div>
      <hr />
      <Title>Lista de tareas:</Title>
      <TaskList tasks={todos} />
    </div>
  )
}

export default App

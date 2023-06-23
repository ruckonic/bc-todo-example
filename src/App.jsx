
import { useState } from 'react'
import './App.css'

import {Button, TaskList, Title} from './components'
import { useEffect } from 'react'
import { WsMock } from './components/WSMock'

async function getTodos() { 
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  return res.json()
}

async function postTodos(todo) { 
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

  return res.json()  
}

async function updateTodo(todo) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify(todo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Accept': 'application/json'
    },
  })

  return res.json() 
}

function App() {
  const [todos, setTodos] = useState([])
  const [inputVal, setInputVal] = useState('')
  

  useEffect(() => {
    getTodos().then(setTodos)
  }, [])

  useEffect(() => { 
    function onMessage({ data }) { 
      setTodos((prev) => [data, ...prev])
    }
    // Aquí se agrega el listener para el socket
    window.ws.addEventListener('message', onMessage)

    return () => { 
      // Aquí se remueve el listener para el socket
      window.ws.removeEventListener('message', onMessage)
    }
  }, [])

  const onTaskInputChange = (e) => {
    setInputVal(e.target.value)
  }

  const onClickTaskButton = async () => { 
    const todo = {
      title: inputVal,
      completed: false
    }

   const serverTodo = await postTodos(todo)

    setTodos([serverTodo, ...todos])
    setInputVal('')    
  } 

  return (
    <div>
      <WsMock />{/* Este componente es solo para simular un socket */}
      <Title>Todos</Title>
      <div>
        <input type='text' value={inputVal} placeholder='Ej: Comprar arroz' onChange={onTaskInputChange} />
        <Button onClick={onClickTaskButton}>Add</Button>
      </div>
      <hr />
      <Title>Lista de tareas:</Title>
      <TaskList tasks={todos} onTaskCompleted={onTaskCompleted} />
    </div>
  )

 async function onTaskCompleted(task) {
    const idx = todos.findIndex(t => t.id === task.id)
    const newTodos = [...todos]
    
    newTodos[idx] = {
      ...todos[idx],
      isCompleted: !todos[idx].isCompleted
    }
   
    await updateTodo(newTodos[idx])

    setTodos(newTodos)
  }
}

export default App

import { useReducer } from 'react'
import './App.css'
import { todoReducer } from './reducers/todoReducer'
import { DEFAULT_TODO } from './util/storage'

function App() {
  const [todos, dispatch] = useReducer(todoReducer, DEFAULT_TODO)


  return (
    <div>

    </div>
  )
}

export default App

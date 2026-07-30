import { useReducer } from 'react'
import './App.css'
import { todoReducer } from './reducers/todoReducer'
import { DEFAULT_TODO } from './util/storage'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'

function App() {
  const [todos, dispatch] = useReducer(todoReducer, DEFAULT_TODO)

  const handleAddTodo = (text) => {
    dispatch({
      type: "ADD_TODO",
      payload: text
    });
  };

  const handleDeleteTodo = (todoId) => {
    dispatch({
      type: "DELETE_TODO",
      payload: todoId
    });
  };

  const handleToggleTodo = (todoId) => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: todoId
    })
  }

  console.log(todos);

  return (
    <div>
      <TodoEditor
        onAddTodo={handleAddTodo}
      />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  )
}

export default App

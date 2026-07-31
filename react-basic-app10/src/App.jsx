import { useEffect, useMemo, useReducer, useState } from "react";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";
import { todoReducer } from "./reducers/todoReducer";
import { loadTodos, saveTodos, removeTodos } from "./utils/storage";
import {
  TODO_FILTERS,
  getFilteredTodos,
  getTodoStats,
} from "./utils/todo";
import "./App.css";

function App() {
  const [todos, dispatch] = useReducer(todoReducer, undefined, loadTodos);
  const [filter, setFilter] = useState(TODO_FILTERS.ALL);

  const filteredTodos = useMemo(
    () => getFilteredTodos(todos, filter),
    [todos, filter]
  );

  const stats = useMemo(() => getTodoStats(todos), [todos]);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const handleAddTodo = (text) => {
    dispatch({
      type: "ADD_TODO",
      payload: text,
    });
  };

  const handleToggleTodo = (todoId) => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: todoId,
    });
  };

  const handleDeleteTodo = (todoId) => {
    dispatch({
      type: "DELETE_TODO",
      payload: todoId,
    });
  };

  const handleClearCompleted = () => {
    dispatch({
      type: "CLEAR_COMPLETED",
    });
  };

  const handleResetTodos = () => {
    const confirmed = window.confirm("모든 할 일을 삭제하시겠습니까?");

    if (!confirmed) {
      return;
    }

    removeTodos();

    dispatch({
      type: "RESET_TODOS",
    });

    setFilter(TODO_FILTERS.ALL);
  };

  return (
    <main className="app">
      <Header />

      <TodoEditor onAddTodo={handleAddTodo} />

      <TodoStats stats={stats} />

      <TodoFilter
        currentFilter={filter}
        onChangeFilter={setFilter}
      />

      <TodoList
        todos={filteredTodos}
        filter={filter}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />

      <section className="actionCard">
        <button
          type="button"
          onClick={handleClearCompleted}
          disabled={stats.completedCount === 0}
        >
          완료 항목 삭제
        </button>

        <button
          type="button"
          className="danger"
          onClick={handleResetTodos}
          disabled={stats.totalCount === 0}
        >
          전체 초기화
        </button>
      </section>
    </main>
  );
}

export default App;
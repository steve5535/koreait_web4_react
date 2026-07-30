import TodoItem from "./TodoItem"

function TodoList({ todos, onDeleteTodo, onToggleTodo }) {
    return (
        <ul className="todoList">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDeleteTodo={onDeleteTodo}
                    onToggleTodo={onToggleTodo}
                />
            ))}
        </ul>
    )
}

export default TodoList

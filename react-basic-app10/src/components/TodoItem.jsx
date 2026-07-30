function TodoItem({ todo, onDeleteTodo, onToggleTodo }) {
    return (
        <li className="todoItem">
            <input
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <button
                type="button"
                onClick={() => onDeleteTodo(todo.id)}
            >삭제</button>
        </li >
    )
}
export default TodoItem

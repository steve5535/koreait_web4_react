function TodoItem({ todo, onToggleTodo, onDeleteTodo }) {
    return (
        <li className={`todoItem${todo.done ? "done" : ""}`}>
            <label>
                <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => onToggleTodo(todo.id)}
                />

                <span>{todo.text}</span>
            </label>

            <div className="todoMeta">
                <small>{todo.createdAt}</small>

                <button type="button" onClick={() => onDeleteTodo(todo.id)}>
                    삭제
                </button>
            </div>
        </li>
    );
}

export default TodoItem;
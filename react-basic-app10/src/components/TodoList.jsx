import { getEmptyMessage } from "../utils/todo";
import TodoItem from "./TodoItem";

function TodoList({
    todos,
    filter,
    onToggleTodo,
    onDeleteTodo,
}) {
    if (todos.length === 0) {
        return (
            <section className="emptyCard">
                <p>{getEmptyMessage(filter)}</p>
            </section>
        );
    }

    return (
        <ul className="todoList">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggleTodo={onToggleTodo}
                    onDeleteTodo={onDeleteTodo}
                />
            ))}
        </ul>
    );
}

export default TodoList;
import { createTodo } from "../util/todo";

export function todoReducer(todos, action) {
    switch (action.type) {
        case "ADD_TODO": {
            const text = action.payload.trim();

            if (!text) {
                return todos;
            }

            return [
                createTodo(text),
                ...todos
            ]
        }
        case "TOGGLE_TODO": {
            return todos.map((todo) => todo.id === action.payload ?
                { ...todo, done: !todo.done }
                : todo
            )
        }
        case "DELETE_TODO": {
            return todos.filter((todo) => todo.id !== action.payload)
        }
        case "CLEAR_COMPLETED": { }
        case "RESET_TODOS": { }
        default: { }
    }
}
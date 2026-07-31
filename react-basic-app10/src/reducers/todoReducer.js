import { createTodo } from "../utils/todo";

export function todoReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO": {
            const text = action.payload.trim();

            if (!text) {
                return state;
            }

            return [createTodo(text), ...state];
        }

        case "TOGGLE_TODO": {
            return state.map((todo) =>
                todo.id === action.payload
                    ? {
                        ...todo,
                        done: !todo.done,
                    }
                    : todo
            );
        }

        case "DELETE_TODO": {
            return state.filter((todo) => todo.id !== action.payload);
        }

        case "CLEAR_COMPLETED": {
            return state.filter((todo) => !todo.done);
        }

        case "RESET_TODOS": {
            return [];
        }

        default: {
            return state;
        }
    }
}
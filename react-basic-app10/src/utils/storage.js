const STORAGE_KEY = "react-todo-list";

const DEFAULT_TODOS = [
    {
        id: "default-1",
        text: "React 컴포넌트 복습하기",
        done: false,
        createdAt: "기본 항목",
    },
    {
        id: "default-2",
        text: "useReducer로 목록 상태 관리하기",
        done: false,
        createdAt: "기본 항목",
    },
    {
        id: "default-3",
        text: "localStorage 저장 흐름 이해하기",
        done: false,
        createdAt: "기본 항목",
    },
];

export function loadTodos() {
    const storedValue = localStorage.getItem(STORAGE_KEY);

    if (!storedValue) {
        return DEFAULT_TODOS;
    }

    try {
        const parsedTodos = JSON.parse(storedValue);

        if (!Array.isArray(parsedTodos)) {
            return DEFAULT_TODOS;
        }

        return parsedTodos;
    } catch {
        return DEFAULT_TODOS;
    }
}

export function saveTodos(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export function removeTodos() {
    localStorage.removeItem(STORAGE_KEY);
}
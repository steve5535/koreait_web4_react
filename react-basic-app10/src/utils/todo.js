export const TODO_FILTERS = {
    ALL: "all",
    ACTIVE: "active",
    COMPLETED: "completed",
};

export const FILTER_LABELS = {
    [TODO_FILTERS.ALL]: "전체",
    [TODO_FILTERS.ACTIVE]: "진행 중",
    [TODO_FILTERS.COMPLETED]: "완료",
};

export function createTodo(text) {
    return {
        id: String(Date.now()),
        text,
        done: false,
        createdAt: new Date().toLocaleString(),
    };
}

export function getFilteredTodos(todos, filter) {
    switch (filter) {
        case TODO_FILTERS.ACTIVE:
            return todos.filter((todo) => !todo.done);

        case TODO_FILTERS.COMPLETED:
            return todos.filter((todo) => todo.done);

        case TODO_FILTERS.ALL:
        default:
            return todos;
    }
}

export function getTodoStats(todos) {
    const totalCount = todos.length;
    const completedCount = todos.filter((todo) => todo.done).length;
    const activeCount = totalCount - completedCount;
    const progress =
        totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

    return {
        totalCount,
        completedCount,
        activeCount,
        progress,
    };
}

export function getEmptyMessage(filter) {
    switch (filter) {
        case TODO_FILTERS.ACTIVE:
            return "진행 중인 할 일이 없습니다.";

        case TODO_FILTERS.COMPLETED:
            return "완료된 할 일이 없습니다.";

        case TODO_FILTERS.ALL:
        default:
            return "아직 등록된 할 일이 없습니다.";
    }
}
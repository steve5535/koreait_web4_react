export function createTodo(text) {
    return {
        id: String(Date.now()),
        text,
        done: false,
        createAt: new Date().toLocaleString()
    }
}
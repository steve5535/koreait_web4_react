import { useState } from "react"

function TodoEditor({ onAddTodo }) {
    const [text, setText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const trimmedText = text.trim();

        if (!trimmedText) {
            console.log("할 일을 입력해주세요")
            return;
        }
        onAddTodo(trimmedText);
        setText("")
    }

    return (
        <div>
            <form className="todoForm" onSubmit={handleSubmit}>
                <input
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    placeholder="입력"
                />
                <button type="submit">추가</button>

            </form>
        </div>
    )
}

export default TodoEditor

import { useEffect, useRef, useState } from "react";

function FocusInput() {
    const inputRef = useRef(null);
    const [message, setMessage] = useState("");

    const handleFocus = () => {
        inputRef.current.focus();
    };

    const handleSubit = () => {
        const value = inputRef.current.value;
        setMessage(`입력한메모: ${value}`);
        inputRef.current.value = "";
    };

    return (
        <div>
            <input ref={inputRef}></input>
            <button type="button" onClick={handleFocus}>
                입력창 포커스
            </button>
            <button type="button" onClick={handleSubit}>
                메모 확인
            </button>
            <p>{message}</p>
        </div>
    );
}

export default FocusInput;

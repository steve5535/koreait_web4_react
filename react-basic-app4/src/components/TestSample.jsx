import useCounter from "../hooks/useCounter";
import useInput from "../hooks/useInput"
import useLocalStorage from "../hooks/useLocalStorage";
import useToggle from "../hooks/useToggle";

function TestSample() {
    const nameInput = useInput("");
    const notification = useToggle(true);
    const visitCounter = useCounter(0);

    const savedName = useLocalStorage("profile-name", "")

    const handleSaveValue = () => {
        savedName.setValue(nameInput.value.trim())
    }

    return (
        <div>
            <input
                value={nameInput.value}
                onChange={nameInput.onChange}
            ></input>
            <button type="button" onClick={nameInput.reset}>초기화</button>

            <input
                type="checkbox"
                checked={notification.value}
                onChange={notification.toggle}
            ></input>

            <button type="button" onClick={visitCounter.decrease}>-1</button>
            <p>{visitCounter.count}</p>
            <button type="button" onClick={visitCounter.increase}>+1</button>

            <button type="button" onClick={handleSaveValue}>저장하기</button>
            <button type="button" onClick={savedName.remove}>삭제하기</button>

        </div>
    )
}

export default TestSample

import { useEffect, useState } from "react"

function TimerBox() {
    const [second, setSecond] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (isRunning === false) {
            return;
        }
        const timerId = setInterval(() => {
            setSecond((prevSecond) => prevSecond + 1);
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    })

    const handleToggle = () => {
        setIsRunning((prevIsTunning) => !prevIsTunning);
    }

    const handleReset = () => {
        setSecond(0);
        setIsRunning(false);
    }

    return (
        <div>
            <p>현재 카운트 {second} 초</p>
            <button type="button" onClick={handleToggle}>{isRunning ? "정지" : "시작"}</button>
            <button type="button" onClick={handleReset}>초기화</button>
        </div>
    )
}

export default TimerBox

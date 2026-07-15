import { useEffect, useState } from "react";

function DocumentTitle() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    useEffect(() => {
        console.log("렌더링이 되었음");
    }, [count]);

    const handleIncrease = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const handleDecrease = () => {
        setCount2((prevCount) => prevCount - 1)
    }

    return (
        <div>
            <p>useEffect 전용 - {count}</p>
            <p>useEffect 전용 - DOWN전용 {count2}</p>
            <button type="button" onClick={handleIncrease}>UP</button>
            <button type="button" onClick={handleDecrease}>DOWN</button>
        </div>
    );
}

export default DocumentTitle;

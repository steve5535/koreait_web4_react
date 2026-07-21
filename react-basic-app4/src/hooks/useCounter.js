import { useState } from "react"

function useCounter(initValue = 0) {
    const [count, setCount] = useState(initValue);

    const increase = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const decrease = () => {
        setCount((prevCount) => prevCount - 1)
    }

    const reset = () => {
        setCount(initValue)
    }

    return {
        count,
        setCount,
        increase,
        decrease,
        reset
    }
}

export default useCounter

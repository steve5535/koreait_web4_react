import { useState } from "react"
import CountDisplay from "./CountDisplay";
import CountButton from "./CountButton";

function CountApp() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>여기는 app</p>
            <CountDisplay count={count} />
            <CountButton setCount={setCount} />
        </div>
    )
}

export default CountApp

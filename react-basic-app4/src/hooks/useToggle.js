import { useState } from "react";

function useToggle(initValue = false) {
    const [value, setValue] = useState(initValue);

    const turnOn = () => {
        setValue(true);
    }

    const turnOff = () => {
        setValue(false);
    }

    const toggle = () => {
        setValue((prevValue) => !prevValue);
    }

    return {
        value,
        setValue,
        turnOn,
        turnOff,
        toggle
    }
}

export default useToggle

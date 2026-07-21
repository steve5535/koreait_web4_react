import { useEffect } from "react";
import { useState } from "react"

function useLocalStorage(key, initValue) {
    const [value, setValue] = useState(() => getStoredValue(key, initValue));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])

    const remove = () => {
        localStorage.removeItem(key);
        setValue(initValue);
    }

    return {
        value,
        setValue,
        remove
    }

}

function getStoredValue(key, initValue) {
    const storedValue = localStorage.getItem(key);

    if (storedValue === null) {
        return initValue;
    }

    return JSON.parse(storedValue)
}

export default useLocalStorage

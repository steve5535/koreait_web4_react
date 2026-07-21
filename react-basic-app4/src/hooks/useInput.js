// 입력창 상태를 관리하는 커스텀 훅

import { useState } from "react";

function useInput(initValue = "") {
    const [value, setValue] = useState(initValue);

    // 입력
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    // 초기화
    const reset = () => {
        setValue(initValue);
    }

    return {
        value,
        setValue,
        onChange: handleChange,
        reset
    }

}

export default useInput;

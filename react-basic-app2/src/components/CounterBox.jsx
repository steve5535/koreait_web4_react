import { useState } from "react";

function CounterBox() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <section>
      <p>현재 숫자: {count}</p>
      <button type="button" onClick={handleIncrease}>
        1증가
      </button>
      <button type="button" onClick={handleReset}>
        초기화
      </button>
      <button type="button" onClick={handleDecrease}>
        1감소
      </button>
    </section>
  );
}

export default CounterBox;

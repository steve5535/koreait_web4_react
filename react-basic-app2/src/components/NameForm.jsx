import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  const trimmedName = name.trim();
  const hasName = trimmedName.length > 0;

  const hadleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input value={name} onChange={hadleChange}></input>
      {hasName ? <p>{name}님 반갑습니다.</p> : <p>이름을 입력해주세요</p>}
      <button>초기화버튼</button>
    </div>
  );
}

export default NameForm;

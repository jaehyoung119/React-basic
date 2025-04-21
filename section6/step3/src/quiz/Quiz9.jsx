import { useState } from "react";

function Quiz9() {
  const [inputName, setInputName] = useState("");
  const [error, setError] = useState("");

  const typeName = (e) => {
    setInputName(e.target.value);
    setError("");
  };

  const submitForm = () => {
    if (inputName.trim() === "") {
      setError("이름을 입력해주세요");
      return;
    }

    alert("제출 완료하였습니다");
    setInputName("");
  };

  return (
    <div>
      <input value={inputName} onChange={typeName} placeholder="입력창" />
      <button onClick={submitForm}>제출</button>
    </div>
  );
}

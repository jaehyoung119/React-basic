import { useState } from "react";

function App() {
  const [isInput, setIsInput] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const onChangeText = (e) => {
    setIsInput(e.target.value);
  };

  const toggleText = (e) => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <input onChange={onChangeText} placeholder="입력창" />
      <p>입력한 값: {IsInput} </p>
      <button onClick={toggleText}>토글</button>
      {isVisible && <h1>김재형</h1>}
    </div>
  );
}

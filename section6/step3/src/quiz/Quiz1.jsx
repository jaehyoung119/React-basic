import { useState } from "react";

function Quiz() {
  const [text, setText] = useState("");
  const [isOn, setIsOn] = useState(true);
  const [count, setCount] = useState(0);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onChangeOn = (e) => {
    if (count >= 10) {
      setIsOn(!isOn);
    }
  };

  const onChangeButton = (e) => {
    setCount(count + 1);
  };

  return (
    <>
      <input onChange={onChangeText} placeholder="입력창" />
      <button onClick={onChangeButton}>on</button>
      <button onClick={onChangeOn}></button>
    </>
  );
}

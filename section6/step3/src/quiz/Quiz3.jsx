import { useState } from "react";

function Quiz3() {
  // 문제 1
  const [list, setList] = useState([]);
  setNewItem([newItem, ...list]);

  // 문제2
  const [error, setError] = useState(true);
  const changeError = (e) => {
    if (e.target.value.length > 10) setTextLength(!textLength);
  };

  // 문제3
  const [count, setCount] = useState(0);
  const changeCount = (e) => {
    if (count % 2 === 0) setCount(count + 1);
  };

  // 문제4
  const [enabled, setEnabled] = useState(true);
  const changeEnabled = (e) => {
    setEnabled(e.target.checked);
  };

  // 문제5
  const [isDone, setIsDone] = useState(true);
  const changeIsDone = (e) => {};

  return (
    <div>
      <input onChange={changeError} placeholder="입력창" />
      <button onClick={changeCount}>버튼</button>
      <input onChange={changeEnabled} type="checkBox" />
    </div>
  );
}

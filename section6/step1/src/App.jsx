import { useEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (count === 0) return;

    const timer = setTimeout(() => {
      setCount(0);
    }, 3000);

    return () => clearTimeout(timer);
  }, [count]);

  const setFocus = () => {
    inputRef.current.focus();
  };

  const toggleText = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <input ref={inputRef} placeholder="입력창"></input>
      <button onClick={setFocus}>포커스 버튼</button>
      <button onClick={toggleText}>텍스트 토글</button>
      {visible && <h1>이 텍스트는 토글</h1>}
    </div>
  );
}

export default App;

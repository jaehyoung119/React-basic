import { useMemo, useState } from "react";

function Quiz8() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  const changeCount = (e) => {
    setCount(count + 1);
  };

  const changeNum = (e) => {
    setNum(e.target.value);
  };

  const doubleNum = useMemo(() => {
    console.log("계산 실행중");
    return num * 2;
  }, [num]);

  return (
    <div>
      <input onChange={changeNum} placeholder="숫자를입력하세요" />
      <button onClick={changeCount}>버튼</button>
    </div>
  );
}

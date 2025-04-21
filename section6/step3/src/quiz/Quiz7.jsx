import { useEffect, useState } from "react";

function Quiz7() {
  const [count, setCount] = useState(0);

  const changeCount = (e) => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count === 0) return;

    const timer = setTimeout(() => {
      setCount(0);
    }, 3000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <button onClick={changeCount}>버튼</button>
    </div>
  );
}

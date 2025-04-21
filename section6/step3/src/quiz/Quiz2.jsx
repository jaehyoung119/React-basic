import { useState } from "react";

function Quiz2() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [isChecked, setIsChecked] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const isName = () => {
    setName("");
  };

  const changeCount = (e) => {
    setCount(count - 1);
  };

  const clickCheckBox = (e) => {
    setIsChecked(!isChecked);
  };

  const turnDark = (e) => {
    setIsDarkMode(!isDarkMode);
  };

  const [numbers, setNumbers] = useState([]);
  setNumbers([...numbers, 5]);

  return (
    <div>
      <button onClick={changeCount}></button>
      <input onChange={clickCheckBox} type="checkBox" />
      {isDarkMode && <div></div>}
    </div>
  );
}

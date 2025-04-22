import { useState } from "react";

function Quiz12() {
  const [checkList, setCheckList] = useState([]);

  const hobbies = ["음악", "게임", "독서", "운동"];

  const onChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setCheckList((prev) => [...prev, value]);
    } else {
      setCheckList((prev) => prev.filter((item) => item !== value));
    }
  };

  const onSubmit = () => {
    console.log("선택한 관심사:", checkList);
  };

  return (
    <div>
      {hobbies.map((hobbyItem) => (
        <label key={hobbyItem}>
          <input
            type="checkbox"
            value={hobbyItem}
            onChange={onChange}
            checked={checkList.includes(hobbyItem)}
          />
          {hobbyItem}
        </label>
      ))}

      <button onClick={onSubmit}>제출</button>
    </div>
  );
}

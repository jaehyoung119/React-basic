// props 기본값 할당시 구조분해 형식으로 할당

const Button = ({ text, children }) => {
  const onClickButton = (e) => {
    console.log(e); // 이벤트 객체(synthetic event)
    console.log(text);
  };

  return (
    <button onClick={onClickButton}>
      {text} {children}
    </button>
  );
};

export default Button;

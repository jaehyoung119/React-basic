import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import Button from "./components/Button.jsx";
import { useState } from "react";

function App() {
  const buttonProps = {
    // 스프레드 연산자 사용가능
    text: "카페",
    color: "red",
  };

  const [state, setState] = useState(0);

  /** 부모 컴포넌트 */
  return (
    <>
      <Button text={"메일"} />
      <Button {...buttonProps} />
      <Button text={"블로그"}>
        <div>자식요소</div>
      </Button>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;

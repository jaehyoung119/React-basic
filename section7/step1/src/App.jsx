// src/App.jsx
import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <h1>다크모드 테스트</h1>
      <ThemeToggle />
    </div>
  );
}

export default App;

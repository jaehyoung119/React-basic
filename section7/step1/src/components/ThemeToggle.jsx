import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "다크모드" : "라이드모드"}
    </button>
  );
}

export default ThemeToggle;

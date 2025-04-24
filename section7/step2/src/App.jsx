import { useReducer, useMemo } from "react";
import TodoForm from "./assets/components/TodoForm";
import TodoList from "./assets/components/TodoList";

// ✅ 초기 할 일 목록
const initialTodos = [
  { id: 1, content: "React 공부", isDone: false },
  { id: 2, content: "운동하기", isDone: true },
];

// ✅ reducer 함수 정의
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.newTodo];

    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      );

    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  // ✅ 완료된 항목 수 계산 (최적화)
  const doneCount = useMemo(() => {
    return todos.filter((todo) => todo.isDone).length;
  }, [todos]);

  return (
    <div>
      <h1>📌 할 일 리스트</h1>

      <TodoForm
        onAdd={(text) => {
          const newTodo = {
            id: Date.now(),
            content: text,
            isDone: false,
          };
          dispatch({ type: "ADD", newTodo });
        }}
      />

      <TodoList
        todos={todos}
        onToggle={(id) => dispatch({ type: "TOGGLE", id })}
        onDelete={(id) => dispatch({ type: "DELETE", id })}
      />

      <p>✅ 완료된 항목: {doneCount}개</p>
    </div>
  );
}

export default App;

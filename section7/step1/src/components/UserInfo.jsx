import { useUser } from "../context/UserContext";

function UserInfo() {
  const { users, toggleLogin } = useUser();

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>
            {user.name} — {user.isLogin ? "로그인" : "로그아웃"}
          </p>
          <button onClick={() => toggleLogin(user.id)}>상태 변경</button>
        </div>
      ))}
    </div>
  );
}

export default UserInfo;

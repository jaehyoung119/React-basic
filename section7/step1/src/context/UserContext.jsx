import { Children, createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([
    { id: 1, name: "김재형", isLogin: true },
    { id: 2, name: "최명수", isLogin: true },
    { id: 3, name: "유연수", isLogin: true },
  ]);

  const toggleLogin = (targetId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === targetId ? { ...user, isLogin: !user.isLogin } : user
      )
    );
  };

  return (
    <UserContext.Provider value={{ users, toggleLogin }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}

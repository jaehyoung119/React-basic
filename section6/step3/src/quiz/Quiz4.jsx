function Quiz4() {
  return (
    <div>
      {users
        .filter((user) => user.name === "재형")
        .map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
    </div>
  );
}

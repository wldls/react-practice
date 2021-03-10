import React, { useRef, useState, useMemo, useCallback } from "react";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import Counter from "./components/Counter";

const countActiveUsers = (users) => {
  return users.filter((user) => user.active).length;
};
const App = () => {
  const [inputs, setInputs] = useState({ username: "", email: "" });
  const { username, email } = inputs;
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    { id: 2, username: "tester", email: "tester@gmail.com", active: false },
    { id: 3, username: "liz", email: "lliz@gmail.com", active: false },
  ]);

  const nextId = useRef(4);
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    // setInputs({
    //   ...inputs,
    //   [name]: value,
    // });

    // 함수형 업데이트
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  }, []);

  const onCreate = useCallback(() => {
    const user = { id: nextId.current, username, email };
    setUsers((users) => [...users, user]);

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  }, [email, username]);
  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((v) => v.id !== id));
  }, []);
  const onToggle = useCallback((id) => {
    setUsers((users) =>
      users.map((v) => (v.id === id ? { ...v, active: !v.active } : v))
    );
  }, []);
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
      <Counter />
    </>
  );
};

export default App;

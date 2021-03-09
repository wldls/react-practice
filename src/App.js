import React, { useRef, useState } from "react";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";

const App = () => {
  const [inputs, setInputs] = useState({ username: "", email: "" });
  const { username, email } = inputs;
  const [users, setUsers] = useState([
    { id: 1, username: "velopert", email: "public.velopert@gmail.com" },
    { id: 2, username: "tester", email: "tester@gmail.com" },
    { id: 3, username: "liz", email: "lliz@gmail.com" },
  ]);

  const nextId = useRef(4);
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onCreate = () => {
    const user = { id: nextId.current, username, email };
    setUsers([...users, user]);

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };
  const onRemove = (id) => {
    setUsers(users.filter((v) => v.id !== id));
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
};

export default App;

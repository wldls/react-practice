import React, { useRef, useMemo, useCallback, useReducer } from "react";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import Counter from "./components/Counter";
import useInputs from "./hooks/useInputs";

const countActiveUsers = (users) => {
  return users.filter((user) => user.active).length;
};

const initialState = {
  inputs: {
    username: "",
    email: "",
  },
  users: [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    { id: 2, username: "tester", email: "tester@gmail.com", active: false },
    { id: 3, username: "liz", email: "lliz@gmail.com", active: false },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case "CREATE_USER":
      return {
        // inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((v) =>
          v.id === action.id ? { ...v, active: !v.active } : v
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((v) => v.id !== action.id),
      };
    default:
      return state;
  }
};

export const UserDispatch = React.createContext(null);

const App = () => {
  const [{ username, email }, onChange, reset] = useInputs({
    username: "",
    email: "",
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  // const { username, email } = state.inputs;
  const nextId = useRef(4);

  // const onChange = useCallback((e) => {
  //   const { name, value } = e.target;

  //   // reducer 사용
  //   dispatch({
  //     type: "CHANGE_INPUT",
  //     name,
  //     value,
  //   });
  // }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: { id: nextId.current, username, email },
    });

    reset();

    nextId.current += 1;
  }, [email, username, reset]);
  // const onRemove = useCallback((id) => {
  //   dispatch({
  //     type: "REMOVE_USER",
  //     id,
  //   });
  // }, []);
  // const onToggle = useCallback((id) => {
  //   dispatch({
  //     type: "TOGGLE_USER",
  //     id,
  //   });
  // }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
      <div>활성 사용자 수 : {count}</div>
      <Counter />
    </UserDispatch.Provider>
  );
};

export default App;

import React, { useMemo, useReducer } from "react";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import Counter from "./components/Counter";
import produce from "immer";
import Users from "./components/Users";

const countActiveUsers = (users) => {
  return users.filter((user) => user.active).length;
};

const initialState = {
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
      // return {
      //   users: state.users.concat(action.user),
      // };
      return produce(state, (draft) => {
        draft.users.push(action.user);
      });
    case "TOGGLE_USER":
      // return {
      //   ...state,
      //   users: state.users.map((v) =>
      //     v.id === action.id ? { ...v, active: !v.active } : v
      //   ),
      // };
      return produce(state, (draft) => {
        const user = draft.users.find((user) => user.id === action.id);
        user.active = !user.active;
      });
    case "REMOVE_USER":
      // return {
      //   ...state,
      //   users: state.users.filter((v) => v.id !== action.id),
      // };
      return produce(state, (draft) => {
        const idx = draft.users.findIndex((user) => user.id === action.id);
        draft.users.splice(idx, 1);
      });
    default:
      return state;
  }
};

export const UserDispatch = React.createContext(null);

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수 : {count}</div>
      <Counter />
      <Users />
    </UserDispatch.Provider>
  );
};

export default App;

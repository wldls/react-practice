import React, { useEffect, useContext } from "react";
import { UserDispatch } from "../App";

const User = React.memo(function User({ user }) {
  useEffect(() => {
    console.log("UserList");
  });

  const onRemove = (id) => {
    console.log(id);
  };

  const dispatch = useContext(UserDispatch);
  return (
    <div>
      <b
        style={{ cursor: "pointer", color: user.active ? "green" : "black" }}
        onClick={() => dispatch({ type: "TOGGLE_USER", id: user.id })}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button type="button" onClick={() => onRemove(user.id)}>
        삭제
      </button>
    </div>
  );
});

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default React.memo(UserList);

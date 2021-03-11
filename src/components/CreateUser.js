import React, { useRef, useEffect, useContext } from "react";
import useInputs from "../hooks/useInputs";
import { UserDispatch } from "../App";

const CreateUser = () => {
  useEffect(() => {
    console.log("createUser");
  });
  const nextId = useRef(4);
  const dispatch = useContext(UserDispatch);
  const [{ username, email }, onChange, reset] = useInputs({
    username: "",
    email: "",
  });
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button
        type="button"
        onClick={(e) => {
          dispatch({
            type: "CREATE_USER",
            user: { id: nextId.current, username, email, active: false },
          });
          nextId.current += 1;
          reset();
        }}
      >
        등록
      </button>
    </div>
  );
};

export default React.memo(CreateUser);

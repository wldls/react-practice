import React, { useState, useEffect } from "react";
// import axios from "axios";
// import useAsync from "../hooks/useAsync";
// import { useAsync } from "react-async";
import { useUsersState, useUserDispatch, getUsers } from "../UsersContext";
import User from "./User";

// async function getUsers() {
//   const { data } = await axios.get(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   return data;
// }

function Users() {
  // const [state, refetch] = useAsync(getUsers(), [], true);
  // const { loading, error, data: users } = state;
  const [userId, setUserId] = useState(null);
  // const { data: users, error, isLoading, reload } = useAsync({
  //   promiseFn: getUsers,
  // });
  const state = useUsersState();
  const dispatch = useUserDispatch();

  const { data: users, loading, error } = state.users;
  const fetchData = () => {
    getUsers(dispatch);
  };

  console.log(userId);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users)
    return (
      <button type="button" onClick={fetchData}>
        불러오기
      </button>
    );
  return (
    <>
      <ul>
        {users.map((v) => (
          <li
            key={v.id}
            onClick={() => setUserId(v.id)}
            style={{ cursor: "pointer" }}
          >
            {v.username} ({v.name})
          </li>
        ))}
      </ul>
      <button type="button" onClick={fetchData}>
        다시 불러오기
      </button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;

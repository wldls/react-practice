import React from "react";
import axios from "axios";
import useAsync from "../hooks/useAsync";

async function getUsers() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
}

function Users() {
  const [state, refetch] = useAsync(getUsers(), [], true);
  const { loading, error, data: users } = state;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users)
    return (
      <button type="button" onClick={refetch}>
        불러오기
      </button>
    );
  return (
    <>
      <ul>
        {users.map((v) => (
          <li key={v.id}>
            {v.username} ({v.name})
          </li>
        ))}
      </ul>
      <button type="button" onClick={refetch}>
        다시 불러오기
      </button>
    </>
  );
}

export default Users;

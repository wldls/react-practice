import React, { useEffect } from "react";
// import axios from "axios";
// import { useAsync } from "react-async";
// import useAsync from "../hooks/useAsync";
import {
  useUsersState,
  useUserDispatch,
  getUser,
  // getUsers,
} from "../UsersContext";

// async function getUser({ id }) {
//   const { data } = await axios.get(
//     `https://jsonplaceholder.typicode.com/users/${id}`
//   );
//   return data;
// }

function User({ id }) {
  // const [state] = useAsync(() => getUser(id), [id]);
  // const { loading, data: user, error } = state;
  // const { data: user, error, isLoading } = useAsync({
  //   promiseFn: getUser,
  //   id,
  //   watch: id,
  // });

  const state = useUsersState();
  const dispatch = useUserDispatch();

  // useEffect를 이용해서 id값이 바뀔 때마다 getUser 함수를 호출해주도록 한다.
  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);

  const { data: user, loading, error } = state.user;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email: </b> {user.email}
      </p>
    </div>
  );
}

export default User;

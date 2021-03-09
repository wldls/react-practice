import { handleActions } from "redux-actions";
import axios from "axios";
import { createPromiseThunk } from "../lib/asyncUtils";

function getPostAPI(postId) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

const GET_POST_PENDING = "GET_POST_PENDING";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_FAILURE = "GET_POST_FAILURE";

// redux thunk 사용
// export const getPost = (postId) => (dispatch) => {
//   dispatch({ type: GET_POST_PENDING });

//   return getPostAPI(postId)
//     .then((res) => {
//       dispatch({
//         type: GET_POST_SUCCESS,
//         payload: res,
//       });
//     })
//     .catch((err) => {
//       dispatch({
//         type: GET_POST_FAILURE,
//         payload: err,
//       });
//       throw err;
//     });
// };

// createPromiseThunk 함수로 분리하여 사용
export const getPost = createPromiseThunk("GET_POST", getPostAPI);

const initialState = {
  pending: false,
  error: false,
  data: {
    title: "",
    body: "",
  },
};

export default handleActions(
  {
    [GET_POST_PENDING]: (state, action) => {
      return {
        ...state,
        pending: true,
        error: false,
      };
    },
    [GET_POST_SUCCESS]: (state, action) => {
      const { title, body } = action.payload.data;
      return {
        ...state,
        pending: false,
        data: {
          title,
          body,
        },
      };
    },
    [GET_POST_FAILURE]: (state, action) => {
      return {
        ...state,
        pending: false,
        error: true,
      };
    },
  },
  initialState
);

import { createAction, handleActions } from "redux-actions";

const INCREMENT = "number/INCREMENT";

// 액션 생성함수
// export const increment = (size) => {
//   return { type: INCREMENT, size };
// };

// createAction 라이브러리 활용하기
export const increment = createAction(INCREMENT, (size) => size);

const initialState = {
  number: 0,
};

// 리듀서 작성
// export default function number(state = initialState, aciton) {
//   switch (aciton.type) {
//     case INCREMENT:
//       return {
//         number: state.number + aciton.size,
//       };
//     default:
//       return state;
//   }
// }

// handleActions을 사용하여 리듀서를 객체로 작성
export default handleActions(
  {
    [INCREMENT]: (state, action) => ({
      number: state.number + action.payload,
    }),
  },
  initialState
);

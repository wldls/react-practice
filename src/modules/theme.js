import { createAction, handleActions } from "redux-actions";

// 액션 타입 정의
const SET_THEME = "theme/SET_THEME";

// 액션 생성함수 정의
// export const setTheme = name => ({ type: SET_THEME, name });
export const setTheme = createAction(SET_THEME, name => name);

// 초기상태 정의
const initialState = {
  layoutTheme: "blue"
};

export default handleActions({
  [SET_THEME]: (state, { payload }) => ({
    ...state,
    layoutTheme: payload
  }),
  initialState
});

// 리듀서 작성
// export default function theme(state = initialState, action) {
//   switch (action.type) {
//     case "theme/SET_THEME":
//       return {
//         ...state,
//         layoutTheme: action.name
//       };
//     default:
//       return state;
//   }
// }

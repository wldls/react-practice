import { createAction, handleActions } from "redux-actions";

// 액션 타입 정의
const SET_THEME = "theme/SET_THEME";

// 액션 생성함수 정의
export const setTheme = createAction(SET_THEME, name => name);

// 초기상태 정의
const initialState = {
  layoutTheme: ""
};

export default handleActions(
  {
    [SET_THEME]: (state, { payload }) => ({
      ...state,
      layoutTheme: payload
    })
  },
  initialState
);

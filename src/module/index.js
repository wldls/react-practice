import { combineReducers } from "redux";
import number from "./number";
import post from "./post";

const rootReducer = combineReducers({
  number,
  post,
});

export default rootReducer;

import { combineReducers } from "redux";
import lists from "./lists";
import modal from "./modal";

export default combineReducers({
  lists,
  modal
});

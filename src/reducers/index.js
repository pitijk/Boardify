import { combineReducers } from "redux";
import lists from "./lists";
import insertingListName from "./insertingListName";
import createListInput from "./createListInput";

export default combineReducers({
  lists,
  insertingListName,
  createListInput
});

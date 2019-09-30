import { combineReducers } from "redux";

import lists from "./lists";
import insertingListName from "./insertingListName";
import createListInput from "./createListInput";

import cards from "./cards";
import createCardInput from "./createCardInput";
import insertingCardName from "./insertingCardName";

export default combineReducers({
  lists,
  insertingListName,
  createListInput,
  cards,
  createCardInput,
  insertingCardName
});

import { combineReducers } from "redux";

import lists from "./lists";
import insertingListName from "./insertingListName";
import createListInput from "./createListInput";

import cards from "./cards";
import createCardInput from "./createCardInput";
import insertingCardName from "./insertingCardName";
import showingCard from "./showingCard";
import insertingCardDescription from "./insertingCardDescription";

export default combineReducers({
  lists,
  insertingListName,
  createListInput,
  cards,
  createCardInput,
  insertingCardName,
  showingCard,
  insertingCardDescription
});

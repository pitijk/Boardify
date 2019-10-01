import { combineReducers } from "redux";
import createList from "./createList";
import createCard from "./createCard";
import insertingCardDescription from "./insertingCardDescription";

export default combineReducers({
  createList, // AC: createListInput, insertingListName,notInsertingListName

  createCard, // AC: createCardInput, insertingCardName, notInsertingCardName

  insertingCardDescription // AC: insertingCardDescription,notInsertingCardDescription
});

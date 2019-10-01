import { combineReducers } from "redux";

import lists from "./lists";
import isInsertingListName from "./isInsertingListName";
import createListInput from "./createListInput";

import cards from "./cards";
import createCardInput from "./createCardInput";
import insertingCardName from "./insertingCardName";
import showingCard from "./showingCard";
import insertingCardDescription from "./insertingCardDescription";

// AC = Action Creators linking to this reducer
export default combineReducers({
  lists, // AC: CreateList, DeleteList
  cards, // AC: createCard, deleteCard, deleteCards, cardDescriptionInput
  showingCard, // AC: showCard, hideCard

  createListInput, // AC: createListInput
  createCardInput, // AC: createCardInput

  isInsertingListName, // AC: insertingListName,notInsertingListName
  insertingCardName, // AC: insertingCardName, notInsertingCardName
  insertingCardDescription // AC: insertingCardDescription,notInsertingCardDescription
});

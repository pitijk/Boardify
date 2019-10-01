import { combineReducers } from "redux";

import lists from "./lists";
import cards from "./cards";
import modalCard from "./modalCard";
import forms from "./forms";

// AC = Action Creators linking to this reducer
export default combineReducers({
  lists, // AC: CreateList, DeleteList
  cards, // AC: createCard, deleteCard, deleteCards, cardDescriptionInput
  modalCard, // AC: showModalCard, hideModalCard
  forms
});

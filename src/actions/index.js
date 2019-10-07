import {
  CREATE_LIST,
  DELETE_LIST,
  EDIT_LIST_NAME,
  CREATE_CARD,
  DELETE_CARD,
  EDIT_CARD_DESCRIPTION,
  EDIT_CARD_NAME,
  SHOW_MODAL,
  HIDE_MODAL
} from "../actionTypes";

export const createList = (id, name) => {
  return {
    type: CREATE_LIST,
    id,
    name
  };
};

export const deleteList = id => {
  return {
    type: DELETE_LIST,
    id
  };
};

export const editListName = (id, name) => {
  return {
    type: EDIT_LIST_NAME,
    id,
    name
  };
};

export const createCard = (cardId, name, listId) => {
  return {
    type: CREATE_CARD,
    cardId,
    name,
    listId
  };
};

export const deleteCard = (cardId, listId) => {
  return {
    type: DELETE_CARD,
    cardId,
    listId
  };
};

export const editCardDescription = (cardId, listId, description) => {
  return {
    type: EDIT_CARD_DESCRIPTION,
    cardId,
    listId,
    description
  };
};

export const editCardName = (cardId, listId, name) => {
  return {
    type: EDIT_CARD_NAME,
    cardId,
    listId,
    name
  };
};

export const showModal = (cardId, listId) => {
  return {
    type: SHOW_MODAL,
    cardId,
    listId
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL
  };
};

// createList = (id, name)
// createCard = (cardId, name, listId)

export const create = (typeToCreate, name, listId, cardId) => {
  return typeToCreate === "list"
    ? createList(listId, name)
    : createCard(cardId, name, listId);
};

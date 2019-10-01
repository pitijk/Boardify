// State.lists //

export const createList = listName => {
  return {
    type: "CREATE_LIST",
    listName
  };
};

export const deleteList = listName => {
  return {
    type: "DELETE_LIST",
    listName
  };
};

// State.cards //

export const createCard = (listName, cardName) => {
  return {
    type: "CREATE_CARD",
    cardName,
    listName
  };
};

export const deleteCard = cardName => {
  return {
    type: "DELETE_CARD",
    cardName
  };
};

export const deleteCards = listName => {
  return {
    type: "DELETE_CARDS",
    listName
  };
};

export const cardDescriptionInput = (cardName, description) => {
  return {
    type: "CARD_DESCRIPTION_INPUT",
    cardName,
    description
  };
};

// State.modalCard //

export const showModalCard = cardName => {
  return {
    type: "SHOW_CARD",
    cardName
  };
};

export const hideModalCard = () => {
  return {
    type: "HIDE_CARD"
  };
};

// State.forms: //

// createList //

export const createListInput = input => {
  return {
    type: "LIST_INPUT",
    input
  };
};

export const insertingListName = () => {
  return {
    type: "INSERTING_LIST"
  };
};

export const notInsertingListName = () => {
  return {
    type: "NOT_INSERTING_LIST"
  };
};

// createCard //

export const createCardInput = input => {
  return {
    type: "CARD_INPUT",
    input
  };
};

export const insertingCardName = listName => {
  return {
    type: "INSERTING_CARD",
    listName
  };
};

export const notInsertingCardName = () => {
  return {
    type: "NOT_INSERTING_CARD"
  };
};

// insertingCardDescription //

export const insertingCardDescription = () => {
  return {
    type: "INSERTING_CARD_DESCRIPTION"
  };
};

export const notInsertingCardDescription = () => {
  return {
    type: "NOT_INSERTING_CARD_DESCRIPTION"
  };
};

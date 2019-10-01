export const createList = title => {
  return {
    type: "CREATE_LIST",
    title
  };
};

export const deleteList = title => {
  return {
    type: "DELETE_LIST",
    title
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

export const createListInput = value => {
  return {
    type: "LIST_INPUT_VALUE",
    value
  };
};

export const createCard = (list, title) => {
  return {
    type: "CREATE_CARD",
    title,
    list
  };
};

export const deleteCard = title => {
  return {
    type: "DELETE_CARD",
    title
  };
};

export const deleteCards = listTitle => {
  return {
    type: "DELETE_CARDS",
    listTitle
  };
};

export const toggleInsertingCardName = list => {
  return {
    type: "TOGGLE_INSERTING_CARD",
    list
  };
};

export const createCardInput = value => {
  return {
    type: "CARD_INPUT_VALUE",
    value
  };
};

export const showCard = cardTitle => {
  return {
    type: "SHOW_CARD",
    cardTitle
  };
};

export const hideCard = () => {
  return {
    type: "HIDE_CARD"
  };
};

export const inputCardDescription = (title, description) => {
  return {
    type: "CARD_DESCRIPTION_INPUT",
    title,
    description
  };
};

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

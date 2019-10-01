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

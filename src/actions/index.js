export const createList = title => {
  return {
    type: "CREATE_LIST",
    title
  };
};

export const toggleInsertingListName = () => {
  return {
    type: "TOGGLE_INSERTING_LIST"
  };
};

export const createListInput = value => {
  return {
    type: "INPUT_VALUE",
    value
  };
};

const def = { isInserting: false, input: "" };
// action: input, listName
export default (state = def, action) => {
  switch (action.type) {
    case "CARD_INPUT":
      return { ...state, input: action.input };
    case "INSERTING_CARD":
      return { ...state, isInserting: true, insideOf: action.listName };
    case "NOT_INSERTING_CARD":
      return { ...state, isInserting: false };
    default:
      return state;
  }
};

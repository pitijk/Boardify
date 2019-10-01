const def = { isInserting: false, input: "" };
// action: input
export default (state = def, action) => {
  switch (action.type) {
    case "LIST_INPUT":
      return { ...state, input: action.input };
    case "INSERTING_LIST":
      return { ...state, isInserting: true };
    case "NOT_INSERTING_LIST":
      return { ...state, isInserting: false };
    default:
      return state;
  }
};

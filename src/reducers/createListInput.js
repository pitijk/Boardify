export default (state = "", action) => {
  switch (action.type) {
    case "LIST_INPUT_VALUE":
      return action.value;
    default:
      return state;
  }
};

export default (state = "", action) => {
  switch (action.type) {
    case "INPUT_VALUE":
      return action.value;
    default:
      return state;
  }
};

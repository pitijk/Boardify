export default (state = "", action) => {
  switch (action.type) {
    case "CARD_INPUT_VALUE":
      return action.value;
    default:
      return state;
  }
};

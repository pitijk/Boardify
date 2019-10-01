export default (state = false, action) => {
  switch (action.type) {
    case "INSERTING_CARD_DESCRIPTION":
      return true;
    case "NOT_INSERTING_CARD_DESCRIPTION":
      return false;
    default:
      return state;
  }
};

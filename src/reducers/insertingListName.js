export default (state = false, action) => {
  switch (action.type) {
    case "NOT_INSERTING_LIST":
      return false;
    case "INSERTING_LIST":
      return true;
    default:
      return state;
  }
};

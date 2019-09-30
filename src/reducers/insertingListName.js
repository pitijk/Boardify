export default (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_INSERTING_LIST":
      return !state;
    default:
      return state;
  }
};

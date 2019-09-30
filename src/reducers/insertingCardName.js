export default (state = {}, action) => {
  switch (action.type) {
    case "TOGGLE_INSERTING_CARD":
      return { isInserting: !state.isInserting, insideOf: action.list };
    default:
      return state;
  }
};

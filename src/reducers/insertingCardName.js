export default (state = {}, action) => {
  switch (action.type) {
    case "INSERTING_CARD":
      return { isInserting: true, insideOf: action.list };
    case "NOT_INSERTING_CARD":
      return { isInserting: false, insideOf: action.list };
    default:
      return state;
  }
};

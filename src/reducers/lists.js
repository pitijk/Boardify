export default (state = [], action) => {
  switch (action.type) {
    case "CREATE_LIST":
      return [...state, action.listName];
    case "DELETE_LIST":
      return state.filter(el => el !== action.listName);
    default:
      return state;
  }
};

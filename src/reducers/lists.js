export default (state = [], action) => {
  switch (action.type) {
    case "CREATE_LIST":
      return [...state, action.title];
    case "DELETE_LIST":
      return state.filter(el => el !== action.title);
    default:
      return state;
  }
};

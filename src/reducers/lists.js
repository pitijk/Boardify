export default (state = [], action) => {
  switch (action.type) {
    case "CREATE_LIST":
      return [...state, action.title];
    default:
      return state;
  }
};

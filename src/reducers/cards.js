export default (state = [], action) => {
  switch (action.type) {
    case "CREATE_CARD":
      return [...state, { title: action.title, insideOfList: action.list }];
    case "DELETE_CARD":
      return state.filter(el => el.title !== action.title);
    default:
      return state;
  }
};

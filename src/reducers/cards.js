export default (state = [], action) => {
  switch (action.type) {
    case "CREATE_CARD":
      return [...state, { title: action.title, insideOfList: action.list }];
    default:
      return state;
  }
};

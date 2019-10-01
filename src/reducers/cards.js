export default (state = [], action) => {
  switch (action.type) {
    case "CREATE_CARD":
      return [
        ...state,
        { title: action.title, insideOfList: action.list, description: "" }
      ];
    case "DELETE_CARD":
      return state.filter(el => el.title !== action.title);
    case "CARD_DESCRIPTION_INPUT":
      return state.map(card =>
        card.title === action.title
          ? { ...card, description: action.description }
          : card
      );
    default:
      return state;
  }
};

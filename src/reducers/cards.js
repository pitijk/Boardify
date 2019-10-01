export default (state = [], action) => {
  switch (action.type) {
    case "CREATE_CARD":
      return [
        ...state,
        {
          cardName: action.cardName,
          insideOfList: action.listName,
          description: ""
        }
      ];
    case "DELETE_CARD":
      return state.filter(el => el.cardName !== action.cardName);
    case "DELETE_CARDS":
      return state.filter(el => el.insideOfList !== action.listName);
    case "CARD_DESCRIPTION_INPUT":
      return state.map(card =>
        card.cardName === action.cardName
          ? { ...card, description: action.description }
          : card
      );
    default:
      return state;
  }
};

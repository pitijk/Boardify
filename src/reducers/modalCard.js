const def = { isShowing: false, cardName: null };
// action: cardName
export default (state = def, action) => {
  switch (action.type) {
    case "SHOW_CARD":
      return { isShowing: true, cardName: action.cardName };
    case "HIDE_CARD":
      return { ...state, isShowing: false };
    default:
      return state;
  }
};

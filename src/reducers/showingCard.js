const def = { show: false, cardName: null };
export default (state = def, action) => {
  switch (action.type) {
    case "SHOW_CARD":
      return { show: true, cardName: action.cardTitle };
    case "HIDE_CARD":
      return { ...state, show: false };
    default:
      return state;
  }
};

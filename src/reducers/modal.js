import { SHOW_MODAL, HIDE_MODAL } from "../actionTypes";

const def = { isShowing: false };
// action: cardId, listId
export default (state = def, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { isShowing: true, ...action };
    case HIDE_MODAL:
      return { ...state, isShowing: false };
    default:
      return state;
  }
};

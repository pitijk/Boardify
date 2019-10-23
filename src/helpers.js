import { createList, createCard } from "./actions";

export const initialize = dispatch => {
  // createList = (id, name)
  dispatch(createList(1, "Your first list"));
  dispatch(createList(2, "Drag Me!"));
  // createCard = (cardId, name, listId)
  dispatch(createCard(3, "You can click me", 1));
  dispatch(createCard(4, "You can drag me too", 2));
  dispatch(
    createCard(5, "To use draging just hold me for a second and then move", 2)
  );
};

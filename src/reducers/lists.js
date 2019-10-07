import {
  CREATE_LIST, // id, name
  DELETE_LIST, // id
  EDIT_LIST_NAME, // id, name
  CREATE_CARD, // cardId, listId, name
  DELETE_CARD, // cardId, listId
  EDIT_CARD_DESCRIPTION, // cardId, listId, description
  EDIT_CARD_NAME // cardId, listId, name
} from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_LIST:
      return [...state, { id: action.id, name: action.name, cards: [] }];
    case DELETE_LIST:
      return state.filter(list => list.id !== action.id);
    case EDIT_LIST_NAME:
      return state.map(list =>
        list.id === action.id ? { ...list, name: action.name } : list
      );
    case CREATE_CARD:
      return state.map(list => {
        return list.id === action.listId
          ? {
              ...list,
              cards: [...list.cards, { id: action.cardId, name: action.name }]
            }
          : list;
      });
    case DELETE_CARD:
      return state.map(list =>
        list.id === action.listId
          ? {
              ...list,
              cards: list.cards.filter(card => card.id !== action.cardId)
            }
          : list
      );
    case EDIT_CARD_DESCRIPTION:
      return state.map(list => {
        if (list.id === action.listId) {
          return {
            ...list,
            cards: list.cards.map(card =>
              card.id === action.cardId
                ? { ...card, description: action.description }
                : card
            )
          };
        } else {
          return list;
        }
      });
    case EDIT_CARD_NAME:
      return state.map(list => {
        if (list.id === action.listId) {
          return {
            ...list,
            cards: list.cards.map(card =>
              card.id === action.cardId
                ? { ...card, name: action.description }
                : card
            )
          };
        } else {
          return list;
        }
      });
    default:
      return state;
  }
};

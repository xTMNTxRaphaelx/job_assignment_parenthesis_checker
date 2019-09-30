/**
 * The way of truth is like a great road. It is not difficult to know it.
 * The misfortune is simply that we do not seek it. -Mencius
 * @description- Redux like store for Maintaining History of Searched Term
 */

export const historyState = [];
export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_HISTORY':
      return [...state, ...action.history];
    default:
      throw new Error();
  }
}

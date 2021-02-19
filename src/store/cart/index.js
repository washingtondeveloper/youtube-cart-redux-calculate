import { createAction, createReducer } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

export class CartItem {
  constructor(obj) {
    obj && Object.assign(this, obj, { quantity: 1 });
  }
}

const INITIAL_STATE = {
  items: [],
  value: 0,
};

export const addItem = createAction("CART/ADD_ITEM");
export const increment = createAction("CART/INCREMENT");

export default createReducer(INITIAL_STATE, {
  [addItem]: (state, action) => ({
    ...state,
    items: verifyExistItem(state, action),
  }),
  [increment]: (state) => ({ ...state, value: state.value + 1 }),
});

function verifyExistItem(state, action) {
  const newItem = new CartItem(action.payload);

  const existItem = state.items.some((item) => item.id === newItem.id);

  if (existItem) {
    return state.items.map((item) => {
      return item.id === newItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }

  return [...state.items, newItem];
}

export const cartQuantitySelector = (state) => state.cart.items.length;
export const itemsCartSelector = (state) => state.cart.items;
// export const calculateTotalSelector = (state) => {
//   console.log("Calcular");
//   return state.cart.items.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );
// };

export const calculateTotalSelector = createSelector(
  itemsCartSelector,
  (items) => {
    console.log("Calcular");
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
);

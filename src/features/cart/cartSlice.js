import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // cart : []
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      let index = state.cart.findIndex(
        (item) => item.pizzaId === action.payload
      );
      state.cart.splice(index, 1);
    },
    increaseItemQuantity(state, action) {
      // Receiving the function call with the pizzaId
      const pizza = state.cart.find((item) => item.pizzaId === action.payload);
      pizza.quantity++;
      pizza.totalPrice = pizza.unitPrice * pizza.quantity;

      // let pizza = state.cart.find((item) => item === action.payload);
    },
    decreaseItemQuanityt(state, action) {
      const pizza = state.cart.find((item) => item.pizzaId === action.payload);
      pizza.quantity--;
      pizza.totalPrice = pizza.unitPrice * pizza.quantity;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuanityt,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

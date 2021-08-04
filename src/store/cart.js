import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [{ item: { name: "", image: "" }, itemCount: 0 }],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    clearExistingCart: (state) => {
      state.cartItems = [{ item: { name: "", image: "" }, itemCount: 0 }];
    },
    startNewCart: (state) => {
      state.cartItems.shift();
    },
    increaseCartItem: (state, action) => {
      state.cartItems[action.payload].itemCount += 1;
    },
    decreaseCartItem: (state, action) => {
      state.cartItems[action.payload].itemCount -= 1;
    },
  },
});

export const {
  addToCart,
  clearExistingCart,
  decreaseCartItem,
  increaseCartItem,
  startNewCart,
} = cartSlice.actions;

export default cartSlice.reducer;

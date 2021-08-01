import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    increaseCartItem: (state, action) => {
      state.cartItems[action.payload].itemCount += 1;
    },
    decreaseCartItem: (state, action) => {
      state.cartItems[action.payload].itemCount -= 1;
    },
  },
});

export const { addToCart, decreaseCartItem, increaseCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;

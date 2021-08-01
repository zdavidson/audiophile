import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCartCartItems: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

export const { addToCartCartItems } = cartSlice.actions;

export default cartSlice.reducer;

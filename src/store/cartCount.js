import { createSlice } from "@reduxjs/toolkit";

export const carCountSlice = createSlice({
  name: "cartCount",
  initialState: {
    cartCount: 0,
  },
  reducers: {
    addToCartCount: (state, action) => {
      state.cartCount += action.payload;
    },
    lowerCartCount: (state) => {
      state.cartCount -= 1;
    },
    raiseCartCount: (state) => {
      state.cartCount += 1;
    },
    resetCartCount: (state) => {
      state.cartCount = 0;
    },
  },
});

export const {
  addToCartCount,
  lowerCartCount,
  raiseCartCount,
  resetCartCount,
} = carCountSlice.actions;

export default carCountSlice.reducer;

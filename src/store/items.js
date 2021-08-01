import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items = action.payload;
    },
    removeFromCart: (state) => {
      state.items -= 1;
    },
    updateAmount: (state, action) => {
      state.items += action.payload;
    },
  },
});

export const { addToCart, removeFromCart, updateAmount } = itemsSlice.actions;

export default itemsSlice.reducer;

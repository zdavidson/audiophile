import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: { item: {}, itemCount: 0 },
  },
  reducers: {
    increaseItems: (state) => {
      state.items.itemCount += 1;
    },
    decreaseItems: (state) => {
      state.items.itemCount -= 1;
    },
    removeFromCart: (state) => {
      state.items -= 1;
    },
    updateAmount: (state, action) => {
      state.items += action.payload;
    },
  },
});

export const { increaseItems, decreaseItems, removeFromCart, updateAmount } =
  itemsSlice.actions;

export default itemsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: { item: {}, count: 0 },
  },
  reducers: {
    increaseItems: (state) => {
      state.items.count += 1;
    },
    decreaseItems: (state) => {
      state.items.count -= 1;
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

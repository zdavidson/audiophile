import { createSlice } from "@reduxjs/toolkit";

export const totalPriceSlice = createSlice({
  name: "totalPrice",
  initialState: {
    totalPrice: 0,
  },
  reducers: {
    addToTotal: (state, action) => {
      state.totalPrice += action.payload;
    },
    removeFromTotal: (state, action) => {
      state.totalPrice -= action.payload;
    },
    resetTotalPrice: (state) => {
      state.totalPrice = 0;
    },
  },
});

export const { addToTotal, removeFromTotal, resetTotalPrice } =
  totalPriceSlice.actions;

export default totalPriceSlice.reducer;

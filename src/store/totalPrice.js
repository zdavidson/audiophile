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
  },
});

export const { addToTotal } = totalPriceSlice.actions;

export default totalPriceSlice.reducer;

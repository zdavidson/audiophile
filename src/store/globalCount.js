import { createSlice } from "@reduxjs/toolkit";

export const globalCountSlice = createSlice({
  name: "globalCount",
  initialState: {
    globalCount: 0,
  },
  reducers: {
    addToGlobalCount: (state) => {
      state.globalCount += 1;
    },
    resetGlobalCount: (state) => {
      state.globalCount = 0;
    },
  },
});

export const { addToGlobalCount, resetGlobalCount } = globalCountSlice.actions;

export default globalCountSlice.reducer;

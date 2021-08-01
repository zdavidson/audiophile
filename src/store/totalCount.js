import { createSlice } from "@reduxjs/toolkit";

export const totalCountSlice = createSlice({
  name: "totalCount",
  initialState: {
    totalCount: 0,
  },
  reducers: {
    addToTotalCount: (state, action) => {
      state.totalCount += action.payload;
    },
  },
});

export const { addToTotalCount } = totalCountSlice.actions;

export default totalCountSlice.reducer;

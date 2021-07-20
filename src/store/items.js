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

// const SET_ITEMS = "SET_ITEMS";

// export const setItems = (items) => {
//   return {
//     type: SET_ITEMS,
//     items,
//   };
// };

// export const fetchItems = () => {
//   return async (dispatch) => {
//     try {
//       const { data } = require("../assets/data");
//       dispatch(setItems(data));
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

// const initialState = [];

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case SET_ITEMS:
//       return action.items;
//     default:
//       return state;
//   }
// };

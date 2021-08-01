import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./items";
import cartReducer from "./cart";

export default configureStore({
  reducer: {
    items: itemReducer,
    cart: cartReducer,
  },
});

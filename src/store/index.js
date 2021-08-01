import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./items";
import cartReducer from "./cart";
import totalPriceReducer from "./totalPrice";

export default configureStore({
  reducer: {
    items: itemReducer,
    cart: cartReducer,
    totalPrice: totalPriceReducer,
  },
});

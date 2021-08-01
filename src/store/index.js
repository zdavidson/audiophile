import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./items";
import cartReducer from "./cart";
import totalPriceReducer from "./totalPrice";
import globalCountReducer from "./globalCount";

export default configureStore({
  reducer: {
    items: itemReducer,
    cart: cartReducer,
    totalPrice: totalPriceReducer,
    globalCount: globalCountReducer,
  },
});

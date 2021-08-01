import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./items";
import cartReducer from "./cart";
import totalPriceReducer from "./totalPrice";
import globalCountReducer from "./globalCount";
import totalCountReducer from "./totalCount";

export default configureStore({
  reducer: {
    items: itemReducer,
    cart: cartReducer,
    totalCount: totalCountReducer,
    totalPrice: totalPriceReducer,
    globalCount: globalCountReducer,
  },
});

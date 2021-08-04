import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import itemReducer from "./items";
import cartReducer from "./cart";
import totalPriceReducer from "./totalPrice";
import globalCountReducer from "./globalCount";
import totalCountReducer from "./totalCount";

const reducers = combineReducers({
  items: itemReducer,
  cart: cartReducer,
  totalCount: totalCountReducer,
  totalPrice: totalPriceReducer,
  globalCount: globalCountReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
});

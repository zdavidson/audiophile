import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./items";

export default configureStore({
  reducer: {
    items: itemReducer,
  },
});

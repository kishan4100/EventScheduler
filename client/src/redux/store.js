import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./eventRedux";
const store = configureStore({
  reducer: { Events: eventReducer },
});

export default store;

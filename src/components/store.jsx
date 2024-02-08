import { configureStore } from "@reduxjs/toolkit";
import handelSlicee from "./handelSlice";
const store = configureStore({
  reducer: {
    HandelApp: handelSlicee,
  },
});

export default store;

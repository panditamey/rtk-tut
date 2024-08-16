import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../slices/contactSlice";

const allreducers = {
  contacts: contactReducer,
};
const store = configureStore({
  reducer: allreducers,
});

export default store;

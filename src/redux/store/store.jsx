import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "../slices/contactSlice";

const allreducers = {
  contacts: contactSlice.reducer,
};
const store = configureStore({
  reducer: allreducers,
  //   devTools:
});

export default store;

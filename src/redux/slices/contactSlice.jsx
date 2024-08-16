import { createSlice } from "@reduxjs/toolkit";
import contacts from "../../data/contacts";
import contactReducer from "../reducers/contactReducers";

const contactSlice = createSlice({
  name: "contacts",
  initialState: contacts,
  reducers: contactReducer,
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;

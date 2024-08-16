import { createSlice } from "@reduxjs/toolkit";
import contacts from "../../data/contacts";

const contactSlice = createSlice({
  name: "contact",
  initialState: contacts.contact,
  reducers: {
    addContact: (state, action) => {
      return [...state, action.payload];
    },
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;

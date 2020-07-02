import { createSlice } from "@reduxjs/toolkit";
import { getContacts } from "./../../services/fakeContactService";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: getContacts(),
    currentUser: {},
    selectedContact: {},
    showChatWindow: false,
  },
  reducers: {
    login: {
      reducer: (state, action) => {
        state.currentUser = action.payload;
        state.selectedContact = {};
        state.showChatWindow = false;
        state.showContactInfo = false;
      },
    },
    setCurrentContact: (state, action) => {
      state.selectedContact = action.payload;
    },
    openWindow: (state, action) => {
      if (action.payload.windowType === "chat") {
        state.showChatWindow = true;
        state.showContactInfo = false;
      }
      if (action.payload.windowType === "info") {
        state.showContactInfo = true;
        state.showChatWindow = false;
      }
    },
  },
});

export const { login, setCurrentContact, openWindow } = contactsSlice.actions;

export default contactsSlice.reducer;

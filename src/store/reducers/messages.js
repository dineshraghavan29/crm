import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      const { message, userId, contactId } = action.payload;
      const messageObj = {
        from: userId,
        to: contactId,
        id: uuidv4(),
        message: message,
        date: new Date().toDateString(),
      };
      state.messages.push(messageObj);
    },
    getMessages: (state, action) => {},
  },
});

//Selectors
export function getMessages(state, userId, contactId) {
  return state.messages.messages.filter(
    (message) =>
      (message.from === userId && message.to === contactId) ||
      (message.to === userId && message.from === contactId)
  );
}

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;

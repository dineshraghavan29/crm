import { combineReducers } from "redux";
import contacts from "./contacts";
import messages from "./messages";

export default combineReducers({ contacts, messages });

import { combineReducers } from "redux";

const userid = (state = "", action) => {
  switch (action.type) {
    case "ADD_USERID":
      return action.value;
    case "REMOVE_USERID":
      return "";
    default:
      return state;
  }
};

const records = (state = [], action) => {
  switch (action.type) {
    case "ADD_RECORDS":
      return [...state, action.value];
    case "REMOVE_RECORDS":
      return [];
    default:
      return state;
  }
};

export default combineReducers({ userid, records });

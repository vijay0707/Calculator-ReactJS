import { calculate } from "../utils";

export const calculateReducer = (state = "", action) => {
  switch (action.type) {
    case "CLICK":
      return state + action.payload;
    case "CALCULATE":
      return calculate(state);
    case "BACKSPACE":
      return state.slice(0, state.length - 1);
    case "CLEAR":
      return (state = "");
    default:
      return state;
  }
};

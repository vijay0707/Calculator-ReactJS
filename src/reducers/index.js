import {
  combineReducers
} from "redux";
import {
  calculateReducer
} from "./calculateReducer";

const allReducers = combineReducers({
  calculateReducer,
});

export default allReducers;
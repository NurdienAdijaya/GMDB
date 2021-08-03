import { combineReducers } from "redux";
import reducerReview from "./review";
import movie from "./movie";

const rootReducers = combineReducers({
  reducerReview,
  movie,
});
export default rootReducers;

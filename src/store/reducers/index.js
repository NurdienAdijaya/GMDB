import { combineReducers } from "redux";
import reducerReview from "./review";
import movie from "./movie";
import reducerSearch from "./searchMovie";

const rootReducers = combineReducers({
  reducerReview,
  movie,
  reducerSearch,
});
export default rootReducers;

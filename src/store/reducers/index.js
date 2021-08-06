import { combineReducers } from "redux";
import reducerReview from "./review";
import movie from "./movie";
import reducerSearch from "./searchMovie";
import detail from "./detail"

const rootReducers = combineReducers({
  reducerReview,
  movie,
  reducerSearch,
  detail,
});
export default rootReducers;

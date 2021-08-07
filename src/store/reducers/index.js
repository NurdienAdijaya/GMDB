import { combineReducers } from "redux";
import reducerReview from "./review";
import movie from "./movie";
import reducerSearch from "./searchMovie";
import detail from "./detail"
import reducerMovieNurd from "./moviePlaying";

const rootReducers = combineReducers({
  reducerReview,
  movie,
  reducerSearch,
  detail,
  reducerMovieNurd,
});
export default rootReducers;

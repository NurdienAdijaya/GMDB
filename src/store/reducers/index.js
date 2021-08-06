import { combineReducers } from "redux";
import reducerReview from "./review";
import movie from "./movie";
import reducerSearch from "./searchMovie";
import reducerMovieNurd from "./moviePlaying";

const rootReducers = combineReducers({
  reducerReview,
  movie,
  reducerSearch,
  reducerMovieNurd,
});
export default rootReducers;

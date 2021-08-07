import { combineReducers } from "redux";
import reducerReview from "./review";
import movie from "./movie";
import reducerSearch from "./searchMovie";
import detail from "./detail"
import reducerMovieNurd from "./moviePlaying";
import detailBackend from "./detailbackend"

const rootReducers = combineReducers({
  reducerReview,
  movie,
  reducerSearch,
  detail,
  detailBackend,
  reducerMovieNurd,
});
export default rootReducers;

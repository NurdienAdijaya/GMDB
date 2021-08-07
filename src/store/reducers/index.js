import { combineReducers } from "redux";
import reducerReview from "./review";
import movie from "./movie";
import reducerSearch from "./searchMovie";
import reducerMovieNurd from "./moviePlaying";
import reducerUser from "./user";

const rootReducers = combineReducers({
  reducerReview,
  movie,
  reducerSearch,
  reducerMovieNurd,
  reducerUser,
});
export default rootReducers;

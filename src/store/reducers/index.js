import { combineReducers } from "redux";
import reducerReview from "./review";
import reducerMovieBanner from "./movieBanner";
import reducerUser from "./user";
import reducerMovie from "./movie";
import reducerActors from "./Actor";

const rootReducers = combineReducers({
  reducerReview,
  reducerMovie,
  reducerMovieBanner,
  reducerActors,
  reducerUser,
});
export default rootReducers;

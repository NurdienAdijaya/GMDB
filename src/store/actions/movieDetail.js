import axios from "axios";
import { BASE_URL_TMDB_MOVIE, API_KEY } from "./types";
import {
 GET_MOVIE_DETAIL_BEGIN,
 GET_MOVIE_DETAIL_SUCCESS,
 GET_MOVIE_DETAIL_FAIL,
} from "./types";

export const getMovieDetail= (id) => async (dispatch) => {
    dispatch({
      type: GET_MOVIE_DETAIL_BEGIN,
      loading: true,
      error: null,
    });
    try {
      const res = await axios.get(`${BASE_URL_TMDB_MOVIE}${id}${API_KEY}`);
      dispatch({
        type: GET_MOVIE_DETAIL_SUCCESS,
        loading: false,
        payload: res.data,
        error: null,
      });
    } catch (err) {
      dispatch({
        type: GET_MOVIE_DETAIL_FAIL,
        error: err,
      });
    }
  };

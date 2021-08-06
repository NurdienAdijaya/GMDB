import axios from "axios";
import {
  GET_MOVIES_BEGIN,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
} from "./types";
import { BASE_URL_MOVIE } from "./types";

export const getMovie = () => async (dispatch) => {
  dispatch({
    type: GET_MOVIES_BEGIN,
    loading: true,
    error: null,
  });
  try {
    const res = await axios.get(BASE_URL_MOVIE);
    dispatch({
      type: GET_MOVIES_SUCCESS,
      loading: false,
      payload: res.data,
      error: null,
    });
  } catch (err) {
    dispatch({
      type: GET_MOVIES_FAIL,
      error: err.response,
    });
  }
};



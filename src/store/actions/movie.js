import axios from "axios";
import {
  GET_MOVIES_BEGIN,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
  GET_MOVIE_DETAIL_BEGIN,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_FAIL,
  BASE_URL_MOVIE_GMDB,
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

export const getMoviePlaying = () => async (dispatch) => {
  dispatch({
    type: GET_MOVIES_BEGIN,
    loading: true,
    error: null,
  });
  try {
    const res = await axios.get(`${BASE_URL_MOVIE_GMDB}?offset=0&limit=5`);
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

export const getMovieDetail = (action) => async (dispatch) => {
  const { error, movies_id } = action;
  dispatch({
    type: GET_MOVIE_DETAIL_BEGIN,
    loading: true,
    error: null,
  });
  try {
    const res = await axios.get(`${BASE_URL_MOVIE}${movies_id}`);
    dispatch({
      type: GET_MOVIE_DETAIL_SUCCESS,
      loading: false,
      payload: res.data,
      error: null,
    });
  } catch (err) {
    dispatch({
      type: GET_MOVIE_DETAIL_FAIL,
      error: error,
    });
  }
};

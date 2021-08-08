import axios from "axios";
import {
  GET_REVIEW_BEGIN,
  GET_REVIEW_SUCCESS,
  GET_REVIEW_FAIL,
  BASE_URL_REVIEW,
} from "./types";

export const getReview = () => async (dispatch) => {
  dispatch({
    type: GET_REVIEW_BEGIN,
    loading: true,
    error: null,
  });
  try {
    const res = await axios.get(
      `${BASE_URL_REVIEW}/movie/610a359d0a4caa96bbb22a6a`
    );
    // console.log("ini res", res);
    dispatch({
      type: GET_REVIEW_SUCCESS,
      loading: false,
      payload: res.data.data,
      error: null,
    });
  } catch (err) {
    dispatch({
      type: GET_REVIEW_FAIL,
      error: err.response,
    });
  }
};

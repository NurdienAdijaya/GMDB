import axios from "axios";
import {
  SUBMIT_REVIEW_BEGIN,
  SUBMIT_REVIEW_SUCCESS,
  SUBMIT_REVIEW_FAIL,
  BASE_URL_REVIEW,
} from "./types";

export const addReview = (id) => async (dispatch) => {
  dispatch({
    type: SUBMIT_REVIEW_BEGIN,
    loading: true,
    error: null,
  });
  try {
    const res = await axios.get(BASE_URL_REVIEW, id);
    dispatch({
      type: SUBMIT_REVIEW_SUCCESS,
      loading: false,
      error: null,
    });
  } catch (err) {
    dispatch({
      type: SUBMIT_REVIEW_FAIL,
      error: err.response,
    });
  }
};

import axios from "axios";
import {
  CHANGE_REVIEW_BEGIN,
  CHANGE_REVIEW_SUCCESS,
  CHANGE_REVIEW_FAIL,
  BASE_URL_REVIEW,
} from "./types";

export const changeReview = (id, body) => async (dispatch) => {
  dispatch({
    type: CHANGE_REVIEW_BEGIN,
    loading: true,
    error: null,
  });
  try {
    const res = await axios.get(`${BASE_URL_REVIEW}/${id}`, body);
    dispatch({
      type: CHANGE_REVIEW_SUCCESS,
      loading: false,
      error: null,
    });
  } catch (err) {
    dispatch({
      type: CHANGE_REVIEW_FAIL,
      error: err.response,
    });
  }
};

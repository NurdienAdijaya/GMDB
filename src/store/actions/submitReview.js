import axios from "axios";
import {
  SUBMIT_REVIEW_BEGIN,
  SUBMIT_REVIEW_SUCCESS,
  SUBMIT_REVIEW_FAIL,
  BASE_URL_REVIEW,
} from "./types";

export const addReview = (item) => async (dispatch) => {
  console.log(typeof item.reviews);
  const newData = { _id: 1234567, content: item.reviews, rating: item.rating };
  // const nData = { headline: "1234567", content: item.reviews, rating: item };
  dispatch({
    type: SUBMIT_REVIEW_BEGIN,
    loading: true,
    error: null,
  });
  try {
    const res = await axios.post(BASE_URL_REVIEW, newData);
    console.log(res);
    dispatch({
      type: SUBMIT_REVIEW_SUCCESS,
      loading: false,
      error: null,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: SUBMIT_REVIEW_FAIL,
      error: err.response,
    });
  }
};

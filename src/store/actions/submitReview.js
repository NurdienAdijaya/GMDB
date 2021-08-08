import axios from "axios";
import {
  SUBMIT_REVIEW_BEGIN,
  SUBMIT_REVIEW_SUCCESS,
  SUBMIT_REVIEW_FAIL,
  BASE_URL_REVIEW,
} from "./types";

export const addReview = (item) => async (dispatch) => {
  // console.log(typeof item.reviews);
  // const newData = { _id: 1234567, content: item.reviews, rating: item.rating };
  const nData = {
    headline: item.headline,
    content: item.reviews,
    rating: item.rating,
  };
  dispatch({
    type: SUBMIT_REVIEW_BEGIN,
    loading: true,
    error: null,
  });
  try {
    const res = await axios.post(
      `${BASE_URL_REVIEW}/610a359d0a4caa96bbb22a6a`,
      nData,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjEwZjY1ZTVjZGY5OTZlNDFhYTI0NTgwIiwiaWF0IjoxNjI4Mzk5MDc3LCJleHAiOjE2MzA5OTEwNzd9.Sk1kcAoiiGa3pHp27GYaCG8mfraom247aP3LtapEKJM",
        },
      }
    );
    // console.log(res);
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

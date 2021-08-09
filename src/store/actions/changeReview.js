import axios from "axios";
import {
  CHANGE_REVIEW_BEGIN,
  CHANGE_REVIEW_SUCCESS,
  CHANGE_REVIEW_FAIL,
  BASE_URL_REVIEW,
} from "./types";

export const changeReview =
  ({ id, content, headline, rating }) =>
  async (dispatch) => {
    // console.log(id, content, headline, rating);
    dispatch({
      type: CHANGE_REVIEW_BEGIN,
      loading: true,
      error: null,
    });
    try {
      const res = await axios.put(
        `${BASE_URL_REVIEW}/${id}`,
        {
          content,
          headline,
          rating,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjEwZjY1ZTVjZGY5OTZlNDFhYTI0NTgwIiwiaWF0IjoxNjI4Mzk5MDc3LCJleHAiOjE2MzA5OTEwNzd9.Sk1kcAoiiGa3pHp27GYaCG8mfraom247aP3LtapEKJM",
          },
        }
      );
      // console.log(res);
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

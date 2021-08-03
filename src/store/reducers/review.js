import {
  GET_REVIEW_BEGIN,
  GET_REVIEW_SUCCESS,
  GET_REVIEW_FAIL,
  GET_MOVIES_BEGIN,
} from "../actions/types";

const initialState = {
  review: [],
  loading: false,
  error: null,
};
const reducerReview = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_REVIEW_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_REVIEW_SUCCESS:
      return {
        review: payload,
        loading: false,
        error: null,
      };
    case GET_REVIEW_FAIL:
      return {
        review: [],
        loading: false,
        error: error,
      };
  }
};
export default reducerReview;

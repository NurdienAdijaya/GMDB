import {
  GET_MOVIE_DETAIL_BEGIN,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_FAIL,
} from "../actions/types";

const initialState = {
  detail: [],
  loading: false,
  error: null,
};

const reducerDetail = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_MOVIE_DETAIL_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        detail: payload,
        loading: false,
        error: null,
      };
    case GET_MOVIE_DETAIL_FAIL:
      return {
        ...state,
        detail: [],
        loading: false,
        error: error,
      };
  }
};

export default reducerDetail;

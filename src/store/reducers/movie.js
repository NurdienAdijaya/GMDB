import {
  GET_MOVIES_BEGIN,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
  GET_MOVIE_DETAIL_BEGIN,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_FAIL,
} from "../actions/types";

const initialState = {
  listMovie: {
    movie: [],
    loading: false,
    error: null,
  },
  detailMovie: {
    detail: [],
    loading: false,
    error: null,
  },
};

const reducerMovie = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_MOVIES_BEGIN:
      return {
        ...state,
        listMovie: {
          loading: true,
          error: null,
        },
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        listMovie: {
          movie: payload,
          loading: false,
        },
      };
    case GET_MOVIES_FAIL:
      return {
        listMovie: {
          movie: [],
          loading: false,
          error: error,
        },
      };
    case GET_MOVIE_DETAIL_BEGIN:
      return {
        ...state,
        detailMovie: {
          loading: true,
          error: null,
        },
      };
    case GET_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        detailMovie: {
          detail: payload,
          loading: false,
          error: null,
        },
      };
    case GET_MOVIE_DETAIL_FAIL:
      return {
        ...state,
        detailMovie: {
          detail: [],
          loading: false,
          error: error,
        },
      };
  }
};

export default reducerMovie;

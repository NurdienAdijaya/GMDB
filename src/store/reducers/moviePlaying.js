import {
  GET_MOVIES_BEGIN,
  GET_MOVIES_FAIL,
  GET_MOVIES_SUCCESS,
} from "../actions/types";

const initialState = {
  playing: [],
  loading: false,
  error: null,
};

const reducerMovieNurd = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_MOVIES_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_SUCCESS:
      return {
        playing: payload,
        loading: false,
        error: null,
      };
    case GET_MOVIES_FAIL:
      return {
        playing: [],
        loading: false,
        error: error,
      };
  }
};
export default reducerMovieNurd;

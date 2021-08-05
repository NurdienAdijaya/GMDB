import {
  CLEAR,
  SEARCH_BEGIN,
  SEARCH_FAIL,
  SEARCH_SUCCESS,
} from "../actions/types";

const initialState = {
  result: [],
  loading: false,
  error: null,
};

const reducerSearch = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case SEARCH_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        result: payload,
        loading: false,
        error: null,
      };
    case SEARCH_FAIL:
      return {
        ...state,
        result: [],
        loading: false,
        error: error,
      };
    case CLEAR:
      return {
        ...state,
        result: [],
        loading: false,
        error: null,
      };
  }
};

export default reducerSearch;

import axios from "axios";
import { BASE_URL_SEARCH, CLEAR, SEARCH_BEGIN, SEARCH_FAIL } from "./types";

export const searchItem = (body) => async (dispatch) => {
  dispatch({
    type: SEARCH_BEGIN,
    loading: true,
    error: null,
  });
  try {
    const res = await axios.get(BASE_URL_SEARCH);
    dispatch({
      type: SEARCH_BEGIN,
      loading: false,
      payload: res.data,
      error: null,
    });
  } catch (err) {
    dispatch({
      type: SEARCH_FAIL,
      error: err.response,
    });
  }
};

export const clearItem = () => {
  return {
    type: CLEAR,
  };
};

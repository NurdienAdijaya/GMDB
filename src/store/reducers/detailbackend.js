import {
    GET_GMDB_DETAIL_BEGIN,
    GET_GMDB_DETAIL_SUCCESS,
    GET_GMDB_DETAIL_FAIL
  } from "../actions/types";
  
  const initialState = {
    backend: [],
    loading: false,
    error: null,
  };
  
  const reducerBackend = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
      default:
        return {
          ...state,
        };
      case GET_GMDB_DETAIL_BEGIN:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GET_GMDB_DETAIL_SUCCESS:
        return {
          ...state,
          detail: payload,
          loading: false,
          error: null,
        };
      case GET_GMDB_DETAIL_FAIL:
        return {
          ...state,
          detail: [],
          loading: false,
          error: error,
        };
    }
  };
  
  export default reducerBackend;
  
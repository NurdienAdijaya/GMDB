import {
  GET_USER_BEGIN,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
} from "../actions/types";

const initialState = {
  user: [],
  loading: false,
  error: null,
};
const reducerUser = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_USER_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        playing: payload,
        loading: false,
        error: null,
      };
    case GET_USER_FAIL:
      return {
        playing: [],
        loading: false,
        error: error,
      };
  }
};
export default reducerUser;

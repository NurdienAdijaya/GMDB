import axios from "axios"
import {
GET_GMDB_DETAIL_BEGIN,
GET_GMDB_DETAIL_SUCCESS,
GET_GMDB_DETAIL_FAIL,
BASE_URL_MOVIE_GMDB,
} from "./types";


export const getMovieBackend = (id) => async(dispatch) => {
    dispatch({
      type:GET_GMDB_DETAIL_BEGIN,
      loading: true,
      error: null,
    });
    try {
      const res = await axios.get(`${BASE_URL_MOVIE_GMDB}/${id}`);
      dispatch({
        type: GET_GMDB_DETAIL_SUCCESS,
        loading: false,
        payload: res.data,
        error: null
      });
    }catch (err) {
      dispatch({
        type:GET_GMDB_DETAIL_FAIL,
        error:err,
      })
    }
    }
import axios from "axios"
import {
    GET_ACTOR_BEGIN,
    GET_ACTOR_SUCCESS,
    GET_ACTOR_FAIL,
    BASE_URL_ACTOR_GMDB
} from "./types";


export const getActor = (id) => async (dispatch) => {
dispatch ({
    type: GET_ACTOR_BEGIN,
    loading: true,
    error: null
});
try{ const res = await axios.get(`${BASE_URL_ACTOR_GMDB}${id}`);
    dispatch ({
        type: GET_ACTOR_SUCCESS,
        loading: false,
        payload: res.data,
        error: null
    });
}catch (err) {
    dispatch({
        type: GET_ACTOR_FAIL,
        loading: false,
        error:err
    });
}
}
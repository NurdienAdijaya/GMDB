import {
    GET_ACTOR_BEGIN,
    GET_ACTOR_SUCCESS,
    GET_ACTOR_FAIL,
} from "../actions/types"

const initialState = {
    actor: [],
    loading: false,
    error: null,
};

const reducerActors = (state =initialState, action) => {
    const {type, payload, error} = action;
    switch (type) {
        default:
            return {
                ...state,
            };
    case GET_ACTOR_BEGIN:
        return {
            ...state,
            loading: true,
            error:null,
        };
    case GET_ACTOR_SUCCESS:
        return {
            ...state,
            loading:false,
            actor:payload,
            error:null,
        };
    case GET_ACTOR_FAIL:
        return {
        ...state,
        actor: [],
        loading: false,
        error: error, 
        }
    }
}
export default reducerActors
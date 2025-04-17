import { DELETE_USER, FAIL_USER, GET_ALL_USERS, GET_USER, LOAD_USER } from "../actionTypes/userActionTypes";



const initialState = {
    usersList: [],
    user: {},
    isLoad: false,
    success: [],
    errors: []
}


const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_USER: return { ...state, isLoad: true };

        case GET_ALL_USERS: return { ...state, usersList: payload, isLoad: false };

        case GET_USER: return { ...state, user: payload, isLoad: false };

        case DELETE_USER: 
        const newList = state.usersList.filter(elt => elt._id !== payload._id);
        return { ...state, usersList: newList, isLoad: false };

        case FAIL_USER: return { ...state, isLoad: false, errors: payload.errors };

        default: return state;
    }
}


export default userReducer